const mongoose = require('mongoose');

// Define Schema for destination data
const destinationSchema = new mongoose.Schema({
  destinationTitle: { type: String, required: true },
  destinationDescription: { type: String, required: true },
  whyStudyTitle: { type: String, required: true },
  whyStudyDescription: { type: String, required: true },
  quickFacts: { type: [String], required: true },
  popularIn: { type: [String], required: true },
  
  topUniversity: [
    {
      img: { type: String, required: false }, // Image URL or path
      name: { type: String, required: true },  // University Name
      desc: { type: String, required: false }, // University Description
      subtitle: { type: String, required: false }, // Subtitle or additional details
      location: { type: String, required: false } // Location of the university
    }
  ],

  examRequirement: [
    {
      title: { type: String, required: true },
      description: { type: [String], required: true } // Array of strings for details
    }
  ],

  documentDescription: { type: String, required: true },
  documentList: { type: [String], required: true },

  statementDescription: { type: String, required: true },
  statementList: { type: [String], required: true },

  applyDocumentDescription: { type: String, required: true },
  applyDocumentList: { type: [String], required: true },

  faq: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true }
    }
  ],

  expertNumber: { type: String, required: true },

  destinationName: { type: String, required: true },
  url: { type: String, required: true },
  pageTitle: { type: String, required: true },
  meta: { type: String, required: true }
});

// Create Model
const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
