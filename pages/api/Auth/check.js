
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(200).json({ isAuthenticated: false });
    }
    const response = await axios.post('/api/Auth/check', { token }); 
    const { success } = response.data;
    res.status(200).json({ isAuthenticated: success });
  } catch (error) {
    res.status(200).json({ isAuthenticated: false });
  }
}
