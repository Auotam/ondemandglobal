// api/Auth/formData.js

import DBconnection from "@/utils/DBConnection";

export default async function handler(req, res) {
  await DBconnection();

  try {
    if (req.method === 'GET') {
      const { email } = req.query;

      // Fetch form data based on user's email
      const formData = await FormData.findOne({ userEmail: email });

      if (!formData) {
        return res.status(404).json({ success: false, message: 'Form data not found' });
      }

      return res.status(200).json({ success: true, formData });
    } else {
      return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error fetching user form data:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
