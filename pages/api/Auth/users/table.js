// pages/api/users/index.js

import DBConnection from '@/utils/DBConnection';
import User from '../../../../model/User';

export default async function handler(req, res) {
  await DBConnection();

  // Assume you have some way to get the authenticated user
  // For example, using cookies, headers, or tokens.
  // Here we are just using a mock example
  const { user } = req; // Replace this with your actual authentication logic

  if (user && user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  if (req.method === 'GET') {
    try {
      const users = await User.find({}); // Fetch all users
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
