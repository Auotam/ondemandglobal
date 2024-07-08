import DBConnection from '@/utils/DBConnection';
import FormEntry from '@/model/FormData'; // Adjust the import path as necessary
import Joi from 'joi';

// Define Joi schema for form data validation
const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(), // Ensure email is included and valid
  emergencyPhone: Joi.string().required(),
  medicalAlert: Joi.string().required(),
  Covid19Tested: Joi.string().required(),
  Covid19vaccinated: Joi.string().required(),
  InsuranceProvider: Joi.string().required(),
  nonprescribedrugs: Joi.string().required(),
  allergies: Joi.string().required(),
  city: Joi.string().required(),
  county: Joi.string().required(),
  zipCode: Joi.string().required(),
  userId: Joi.string().alphanum().length(5) // Ensure userId is a 5-character alphanumeric string
});

// Utility function to generate a random 5-character alphanumeric string
const generateUserId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let userId = '';
  for (let i = 0; i < 5; i++) {
    userId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return userId;
};

export default async function handler(req, res) {
  const { method } = req;

  // Ensure database connection
  await DBConnection();

  switch (method) {
    case 'POST':
      try {
        // Validate request body against schema
        const { error } = schema.validate(req.body);
        if (error) {
          return res.status(400).json({ success: false, error: error.details[0].message });
        }

        const { email } = req.body;

        // Check if form entry for this user already exists
        let formEntry = await FormEntry.findOne({ email });

        if (formEntry) {
          // Update the existing form entry
          formEntry = await FormEntry.findOneAndUpdate(
            { email },
            { $set: { ...req.body } }, // Include userId in the update if already present in req.body
            { new: true }
          );
        } else {
          // Create new form entry with generated userId if not present in req.body
          const userId = req.body.userId || generateUserId();
          formEntry = await FormEntry.create({ ...req.body, userId });
        }

        return res.status(201).json({ success: true, data: formEntry });
      } catch (error) {
        console.error('Error creating or updating form data:', error);
        return res.status(400).json({ success: false, error: 'Failed to create or update form data' });
      }
    case 'GET':
      try {
        const { email } = req.query; // Extract email from query parameters
        if (!email) {
          return res.status(400).json({ success: false, error: 'Email is required' });
        }

        // Fetch the form data for the user by email
        const formEntry = await FormEntry.findOne({ email });
        if (!formEntry) {
          return res.status(404).json({ success: false, error: 'Form data not found' });
        }

        return res.status(200).json({ success: true, data: formEntry });
      } catch (error) {
        console.error('Error fetching form data:', error);
        return res.status(400).json({ success: false, error: 'Failed to fetch form data' });
      }
    default:
      return res.status(400).json({ success: false, error: 'Invalid method' });
  }
}
