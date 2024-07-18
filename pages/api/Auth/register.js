import DBconnection from "@/utils/DBConnection";
import User from "@/model/User";
import Joi from "joi";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

// Joi schema for validation
const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    plan: Joi.string().required(),
    price: Joi.number().required(),
    role: Joi.string().valid('user', 'admin').required(),
});

export default async (req, res) => {
    await DBconnection();
    const { name, email, password, plan, price, role } = req.body;
    const { error } = schema.validate({ name, email, password, plan, price, role });

    if (error) {
        return res.status(401).json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') })
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).json({ success: false, message: "Email already in use" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user (unverified initially)
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            plan,
            price,
            role,
            isVerified: false,
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Create email verification token
        const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send verification email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Account Verification',
            text: `Please verify your account by clicking the link: ${process.env.BASE_URL}/verify?token=${verificationToken}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Registration successful. Please check your email to verify your account.' });
    } catch (error) {
        console.error("Error in registration: ", error);
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
}
