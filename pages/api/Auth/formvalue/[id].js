import dbConnect from '@/utils/DBConnection';
import FormEntry from '@/model/FormData';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query; // Assuming id is the emailprefix-userid format

  await dbConnect(); // Ensure database connection

  switch (method) {
    case 'GET':
      try {
        let formEntry;
        const [emailPrefix, userId] = id.split('-'); // Split id into emailPrefix and userId

        // Find the form entry based on emailPrefix and userId
        formEntry = await FormEntry.findOne({ email: { $regex: `^${emailPrefix}`, $options: 'i' }, userId });

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
