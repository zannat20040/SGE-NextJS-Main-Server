const mongoose = require("mongoose");

// Define Schema for destination data
const destinationSchema = new mongoose.Schema(
  {
    destinationTitle: {
      type: String,
      required: [true, "Destination title is required."],
    },
    destinationDescription: {
      type: String,
      required: [true, "Destination description is required."],
    },
    whyStudyTitle: {
      type: String,
      required: [true, "Why study title is required."],
    },
    whyStudyDescription: {
      type: String,
      required: [true, "Why study description is required."],
    },
    quickFacts: {
      default: [],
      type: [String],
      
    },

    popularIn: {
      type: [String],
      required: [true, "Popular locations are required."],
    },

    programDuration: [
      {
        qualification: { type: String },
        duration: { type: String },
        gir: { type: String },
      },
    ],
    costOfStudy: [
      {
        degree: { type: String },
        cost: { type: String },
      },
    ],
    academicIntake: [
      {
        qualification: { type: String },
        duration: { type: String },
      },
    ],
    preparationTime: { type: String }, // Optional field

    destinationFlag: { type: String }, // Optional field for image URL or path
    destinationName: {
      type: String,
      required: [true, "Destination name is required."],
    },

    topUniversity: [
      {
        img: {
          type: String,
          required: [true, "University image is required."],
        },
        name: {
          type: String,
          required: [true, "University name is required."],
        },
        desc: {
          type: String,
          required: [true, "University description is required."],
        },
        subtitle: {
          type: String,
          required: [true, "University subtitle is required."],
        },
        location: {
          type: String,
          required: [true, "University location is required."],
        },
        rank: {
          type: String,
          required: [true, "University rank is required."],
        },
        established: { type: String },
        history: {
          type: String,
          required: [true, "University history is required."],
        },
        achievement: { type: String },
        service: { type: String },
        faculty: {
          type: String,
          required: [true, "University faculty details are required."],
        },
        accomodation: { type: String },
        fees: { type: String },
        internationalFees: { type: String },
        internationalStudent: { type: String },
        courseList: {
          type: [String],
          required: [true, "Course list is required."],
        },
      },
    ],

    studyRequirement: [
      {
        title: {
          type: String,
          required: [true, "Requirement title is required."],
        },
        description: {
          type: String,
          required: [true, "Requirement description is required."],
        },
        img: { type: String },
      },
    ],
    examRequirement: [
      {
        title: { type: String, required: [true, "Exam title is required."] },
        description: {
          type: [String],
          required: [true, "Exam description is required."],
        },
      },
    ],

    documentDescription: { type: String },
    documentList: { type: [String] },

    statementDescription: { type: String },
    statementList: { type: [String] },

    applyDocumentDescription: { type: String },
    applyDocumentList: { type: [String] },

    faq: [
      {
        question: {
          type: String,
          required: [true, "FAQ question is required."],
        },
        answer: { type: String, required: [true, "FAQ answer is required."] },
      },
    ],

    expertNumber: {
      type: String,
      required: [true, "Expert contact number is required."],
    },

    url: {
      type: String,
      required: [true, "URL is required."],
      unique: true,
    },
    pageTitle: { type: String, required: [true, "Page title is required."] },
    meta: { type: String, required: [true, "Meta description is required."] },
  },
  { timestamps: true }
); // Automatically manage createdAt and updatedAt fields

// Create Model
const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
