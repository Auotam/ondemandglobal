import mongoose from 'mongoose';

const FormEntrySchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true }, // Add userId field
  email: { type: String, required: true, unique: true }, // Ensure email remains unique and required
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
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
  image: { 
    data: Buffer,
    contentType: String
  }
}, { timestamps: true });

const FormEntry = mongoose.models.FormEntry || mongoose.model('FormEntry', FormEntrySchema);

export default FormEntry;
