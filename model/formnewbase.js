// model/FormEntry.js

import mongoose from 'mongoose';

const FormEntrynewSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  emergencyPhone: { type: String },
  medicalAlert: { type: String },
  Covid19Tested: { type: String },
  Covid19vaccinated: { type: String },
  InsuranceProvider: { type: String },
  nonprescribedrugs: { type: String },
  allergies: { type: String },
  city: { type: String },
  county: { type: String },
  zipCode: { type: String },
  id: { type: String, required: true }
});

export default mongoose.models.FormEntry || mongoose.model('FormEntrynew', FormEntrynewSchema);
