// pages/api/Auth/verifyotp.js

import dbConnect from '@/utils/DBConnection';
import bcrypt from 'bcryptjs';
import User from '../../../model/User';
import nodemailer from 'nodemailer';

// Connect to MongoDB
dbConnect();

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'delivery@auotam.com',
      pass: 'akfautankogwhjoh',
    },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { email, otp } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    // Compare entered OTP with stored hashed OTP
    const isMatch = await bcrypt.compare(otp.toString(), user.otp);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid OTP.' });
    }

    // Mark user as verified
    user.isVerified = true;

    // Save the user document with updated verification status
    await user.save();

    // Send confirmation email
    await sendConfirmationEmail(user.email);

    res.status(200).json({ success: true, message: 'Account verified and registered successfully.' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
}

// Function to send confirmation email
async function sendConfirmationEmail(email) {
  try {
    await transporter.sendMail({
      from: 'delivery@auotam.com',
      to: email,
      subject: 'Welcome to On Demand Global!',
      text: 'Thank you for choosing On Demand Global.',
    });
    console.log('Confirmation email sent to:', email);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw new Error('Failed to send confirmation email.');
  }
}
