// pages/api/Auth/formvalu.js

import DBConnection from '@/utils/DBConnection';
import FormEntry from '@/model/formnewbase';

export default async function handler(req, res) {
  const { method, body } = req;
  await DBConnection();

  switch (method) {
    case 'POST':
      try {
        const { firstName, idPart } = body;

        if (!firstName || !idPart) {
          return res.status(400).json({ success: false, error: 'First name or ID is missing' });
        }

        const formEntry = await FormEntry.findOne({
          firstName,
          id: new RegExp(idPart + '$')
        });

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
