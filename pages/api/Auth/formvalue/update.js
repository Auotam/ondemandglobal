// /pages/api/Auth/formvalue/updateFormData.js

import { getSession } from 'next-auth/react';
import dbConnect from '@/utils/DBConnection';
import FormEntry from '@/models/FormEntry';

const handler = async (req, res) => {
  const session = await getSession({ req });
  console.log("Session:", session); // Log session for debugging

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    userId,
    email,
    firstName,
    lastName,
    emergencyPhone,
    medicalAlert,
    Covid19Tested,
    Covid19vaccinated,
    InsuranceProvider,
    nonprescribedrugs,
    allergies,
    city,
    county,
    zipCode,
  } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    await dbConnect();

    const formEntry = await FormEntry.findOneAndUpdate(
      { userId },
      {
        email,
        firstName,
        lastName,
        emergencyPhone,
        medicalAlert,
        Covid19Tested,
        Covid19vaccinated,
        InsuranceProvider,
        nonprescribedrugs,
        allergies,
        city,
        county,
        zipCode,
      },
      { new: true }
    );

    if (!formEntry) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'Form data updated successfully', data: formEntry });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
