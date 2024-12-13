const Destination = require("../models/Destination"); // Import your Destination model

// Controller to get all destinations
const getAllDestinations = async (req, res) => {
  try {
    // Fetch all destinations from the database
    const destinations = await Destination.find();

    // Send the list of destinations in the response
    res.status(200).json({
      success: true,
      data: destinations,
    });
  } catch (error) {
    // Handle errors
    console.error("Error fetching destinations:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch destinations. Please try again later.",
    });
  }
};

module.exports = getAllDestinations;
