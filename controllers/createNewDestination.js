const Destination = require("../models/Destination");

// Controller to handle creating a new destination
const createNewDestination = async (req, res) => {
  const {
    applyDocumentDescription,
    applyDocumentList,
    destinationDescription,
    destinationName,
    destinationTitle,
    documentDescription,
    documentList,
    examRequirement,
    expertNumber,
    faq,
    meta,
    pageTitle,
    popularIn,
    quickFacts,
    statementDescription,
    statementList,
    studyRequirement,
    topUniversity,
    url,
    whyStudyDescription,
    whyStudyTitle,
    destinationFlag,
    preparationTime,
    academicIntake,
    costOfStudy,
    programDuration,
  } = req.body;

  try {
    // Check if the URL already exists in the database
    const existingDestination = await Destination.findOne({ url });

    if (existingDestination) {
      return res.status(400).json({
        success: false,
        message:
          "Destination with this URL already exists. Please choose a different one.",
      });
    }

    // Create and save the new destination with the provided URL
    const newDestination = new Destination({
      applyDocumentDescription,
      applyDocumentList,
      destinationDescription,
      destinationName,
      destinationTitle,
      documentDescription,
      documentList,
      examRequirement,
      expertNumber,
      faq,
      meta,
      pageTitle,
      popularIn,
      quickFacts,
      statementDescription,
      statementList,
      studyRequirement,
      topUniversity,
      url, // Using the provided URL directly
      whyStudyDescription,
      whyStudyTitle,
      destinationFlag,
      preparationTime,
      academicIntake,
      costOfStudy,
      programDuration,
    });

    // Save the destination to the database
    await newDestination.save();

    // Send success response
    return res.status(201).json({
      success: true,
      message: "Destination created successfully",
    });
  } catch (error) {
    // If validation error, send the specific validation error messages
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res
        .status(400)
        .json({ success: false, message: "Validation error", errors });
    }

    // Handle other errors
    return res.status(500).json({
      success: false,
      message: "Error creating destination. Please try again later.",
    });
  }
};

module.exports = createNewDestination;
