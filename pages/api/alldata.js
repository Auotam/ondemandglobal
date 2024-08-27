// pages/api/users.js

import dbConnect from '@/utils/DBConnection';
import User from '../../model/User';

export default async function handler(req, res) {
  await dbConnect();  // Ensure database connection

  if (req.method === 'GET') {
    try {
      const users = await User.find();  // Fetch all users
      res.status(200).json({ success: true, data: users });
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch users' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });  // Handle unsupported HTTP methods
  }
}
