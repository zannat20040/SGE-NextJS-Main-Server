const Destination = require("../models/Destination");

const editDestination = async (req, res) => {
  try {
    const { slug } = req.params; // Extract destinationSlug (URL) from request params
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

    // Find the current destination by the slug (URL)
    const currentDestination = await Destination.findOne({ url: slug });

    if (!currentDestination) {
      return res
        .status(404)
        .json({ success: false, message: "Destination not found." });
    }

    // Check if the new URL already exists and is not the current destination's URL
    if (url && url !== currentDestination.url) {
      const existingDestination = await Destination.findOne({ url });
      if (existingDestination) {
        return res.status(400).json({
          success: false,
          message: "The provided URL is already associated with another destination.",
        });
      }
    }

    // Find and update the destination by slug
    const updatedDestination = await Destination.findOneAndUpdate(
      { url: slug }, // Match the destination with the given slug
      {
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
      },
      { new: true, runValidators: true } // Return updated document and validate
    );

    if (!updatedDestination) {
      return res
        .status(404)
        .json({ success: false, message: "Destination not found." });
    }

    res.status(200).json({ success: true, data: updatedDestination });
  } catch (error) {
    console.error("Error updating destination:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update destination.",
      error,
    });
  }
};

module.exports = editDestination;
