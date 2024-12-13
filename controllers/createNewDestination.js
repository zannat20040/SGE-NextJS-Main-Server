const Destination = require("../models/Destination");

// Controller to handle creating a new destination
const createNewDestination = async (req, res) => {
  const {
    applyDocument,
    destinationDescription,
    destinationName,
    destinationTitle,
    documentRequirement,
    examRequirement,
    expertNumber,
    faq,
    meta,
    pageTitle,
    popularIn,
    quickFacts,
    statement,
    studyRequirement,
    topUniversity,
    url,
    whyStudyDescription,
    whyStudyTitle
  } = req.body;

  // Normalize the URL to create a slug-friendly destination URL
  const normalizedUrl = url.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  try {
    // Check if the normalized URL already exists in the database
    const existingDestination = await Destination.findOne({ url: normalizedUrl });

    if (existingDestination) {
      return res.status(400).json({
        success: false,
        message: "Destination with this URL already exists. Please choose a different one.",
      });
    }

    // Create and save the new destination with the normalized URL
    const newDestination = new Destination({
      applyDocument,
      destinationDescription,
      destinationName,
      destinationTitle,
      documentRequirement,
      examRequirement,
      expertNumber,
      faq,
      meta,
      pageTitle,
      popularIn,
      quickFacts,
      statement,
      studyRequirement,
      topUniversity,
      url: normalizedUrl,
      whyStudyDescription,
      whyStudyTitle
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
