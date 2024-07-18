import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (user) => {
  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  const url = `${process.env.BASE_URL}/api/Auth/verify?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Account Verification',
    html: `<p>Please verify your account by clicking the button below:</p>
    <br></br>
           <form action="${url}" method="get" style="display: inline-block;">
             <button type="submit" style="background-color: #02045f; color: #fff; border: none; padding: 10px 20px; cursor: pointer; text-decoration: none; display: inline-block;">Verify Your Account</button>
           </form>`,
  };

  await transporter.sendMail(mailOptions);
};
