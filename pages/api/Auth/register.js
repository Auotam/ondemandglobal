import DBconnection from "@/utils/DBConnection";
import User from "@/model/User";
import Joi from "joi";
import bcrypt from "bcrypt";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  
  plan: Joi.string().valid("Individual", "Family", "Business").required(),
  role: Joi.string().valid("user").required(),
});


export default async (req, res) => {
  await DBconnection(); // Ensure database connection

  const { name, email, password, plan, role } = req.body;

  try {
    // Validate request body including the plan
    const { error } = schema.validate({ name, email, password, plan, role });
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }

    // Check if user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "Email already exists. Please log in." });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user including plan selection and role
    const newUser = await User.create({ name, email, password: hashedPassword, plan, role });

    // Return success response with user data
    return res.status(201).json({ success: true, message: "Account created successfully.", user: newUser });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
  }
};
