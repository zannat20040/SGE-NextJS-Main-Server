const mongoose = require('mongoose');

// Define Schema for destination data
const destinationSchema = new mongoose.Schema({
  applyDocument: { type: String, required: true },
  destinationDescription: { type: String, required: true },
  destinationName: { type: String, required: true },
  destinationTitle: { type: String, required: true },
  documentRequirement: { type: String, required: true },
  examRequirement: [
    {
      examName: { type: String },
      examDetails: { type: String }
    }
  ],
  expertNumber: { type: String, required: true },
  faq: [
    {
      question: { type: String },
      answer: { type: String }
    }
  ],
  meta: { type: String, required: true },
  pageTitle: { type: String, required: true },
  popularIn: [String],
  quickFacts: [String],
  statement: { type: String, required: true },
  studyRequirement: [
    {
      requirement: { type: String },
      details: { type: String }
    }
  ],
  topUniversity: [
    {
      universityName: { type: String },
      universityDetails: { type: String }
    }
  ],
  url: { type: String, required: true },
  whyStudyDescription: { type: String, required: true },
  whyStudyTitle: { type: String, required: true }
});

// Create Model
const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
