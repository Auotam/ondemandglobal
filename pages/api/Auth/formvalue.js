import DBConnection from '@/utils/DBConnection';
import FormEntry from '@/model/FormData';

export default async function handler(req, res) {
  const { method, body } = req; // Extract method and body from request
    
  await DBConnection(); // Ensure database connection

  switch (method) {
    case 'POST':
      try {
        const { email } = body; // Extract email from request body
        
        if (!email) {
          return res.status(400).json({ success: false, error: 'Email is required' });
        }

        const formEntry = await FormEntry.findOne({ email });
        if (!formEntry) {
          return res.status(404).json({ success: false, error: 'Form data not found' });
        }

        return res.status(200).json({ success: true, data: formEntry });
      } catch (error) {
        console.error('Error fetching form data:', error);
        return res.status(500).json({ success: false, error: 'Failed to fetch form data' });
      }
    default:
      return res.status(400).json({ success: false, error: 'Invalid method' });
  }
}
