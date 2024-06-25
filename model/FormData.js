import mongoose from 'mongoose';

// Define the schema for form entries
const FormEntrySchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Ensure email is unique
  emergencyPhone: { type: String, required: true },
  medicalAlert: { type: String, required: true },
  Covid19Tested: { type: String, required: true },
  Covid19vaccinated: { type: String, required: true },
  InsuranceProvider: { type: String, required: true },
  nonprescribedrugs: { type: String, required: true },
  allergies: { type: String, required: true },
  city: { type: String, required: true },
  county: { type: String, required: true },
  zipCode: { type: String, required: true },
}, { timestamps: true });

// Use the existing compiled model if it exists, otherwise compile a new one
const FormEntry = mongoose.models.FormEntry || mongoose.model('FormEntry', FormEntrySchema);

export default FormEntry;
