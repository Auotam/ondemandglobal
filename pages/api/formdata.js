// api/formData.js

import DBconnection from "@/utils/DBConnection";
// import FormData from "@/model/FormData"; // Assuming you have a FormData model

export default async function handler(req, res) {
  await DBconnection();

  try {
    if (req.method === 'POST') {
      const { email, formData } = req.body;

      // Create new FormData document
      const newFormData = new FormData({
        userEmail: email,
        formData,
      });

      // Save to database
      await newFormData.save();

      return res.status(201).json({ success: true, message: 'Form data saved successfully' });
    } else {
      return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error saving user form data:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
