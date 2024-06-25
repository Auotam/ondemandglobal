import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  emergencyPhone: String,
  medicalAlert: String,
  Covid19Tested: String,
  Covid19vaccinated: String,
  InsuranceProvider: String,
  nonprescribedrugs: String,
  allergies: String,
  city: String,
  county: String,
  zipCode: String,
  id: String, // Assuming this is the unique ID field
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
