const mongoose = require("mongoose");

// Define Schema for destination data
const destinationSchema = new mongoose.Schema({
  destinationTitle: { type: String, required: true },
  destinationDescription: { type: String, required: true },
  whyStudyTitle: { type: String, required: true },
  whyStudyDescription: { type: String, required: true },
  quickFacts: { type: [String], required: true },
  popularIn: { type: [String], required: true },

  programDuration: [
    {
      qualification: { type: String, required: false }, // Qualification level
      duration: { type: String, required: false }, // Duration of the program
      gir: { type: String, required: false }, // General information or requirements
    },
  ],
  costOfStudy: [
    {
      degree: { type: String, required: false }, // Degree type
      cost: { type: String, required: false }, // Cost of the degree
    },
  ],  
  academicIntake: { type: [String], required: false }, // New field for academic intake
  preparationTime: { type: String, required: false }, // New field for preparation time
 
  destinationFlag: { type: String, required: false }, // Image URL or path
  destinationName: { type: String, required: true },

  topUniversity: [
    {
      img: { type: String, required: false }, // Image URL or path
      name: { type: String, required: true }, // University Name
      desc: { type: String, required: false }, // University Description
      subtitle: { type: String, required: false }, // Subtitle or additional details
      location: { type: String, required: false }, // Location of the university
      rank: { type: String, required: false }, // University rank
      established: { type: String, required: false }, // Year of establishment
      history: { type: String, required: false }, // Historical details
      achievement: { type: String, required: false }, // Achievements
      service: { type: String, required: false }, // Services offered
      faculty: { type: String, required: false }, // Faculty details
      accomodation: { type: String, required: false }, // Accommodation details
      fees: { type: String, required: false }, // Fees
      internationalFees: { type: String, required: false }, // International fees
      internationalStudent: { type: String, required: false }, // Percentage or count of international students
      courseList: { type: [String], required: false }, // List of courses offered
    },
  ],
  studyRequirement: [
    {
      title: { type: String, required: true }, // Title of the requirement
      description: { type: String, required: true }, // Description of the requirement
      img: { type: String, required: false }, // Optional image URL or path
    },
  ],
  examRequirement: [
    {
      title: { type: String, required: true },
      description: { type: [String], required: true }, // Array of strings for details
    },
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
      answer: { type: String, required: true },
    },
  ],

  expertNumber: { type: String, required: true },

  url: { type: String, required: true },
  pageTitle: { type: String, required: true },
  meta: { type: String, required: true },
});

// Create Model
const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;