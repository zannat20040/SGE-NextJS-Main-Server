const Destination = require("../models/Destination");

// Controller to handle getting a single blog post by slug
const getDestinationDetail = async (req, res) => {
  const { slug } = req.params; // Get blog slug from request parameters

  try {
    // Fetch the blog post by slug
    const destination = await Destination.findOne({ url: slug });

    // Check if the blog post exists
    if (!destination) {
      return res.status(404).json({
        success: false,
        message: "Destination not found.",
      });
    }

    // Send a success response with the blog data
    return res.status(200).json({
      success: true,
      message: "Destination details retrieved successfully",
      destination,
    });
  } catch (error) {
    console.error(error);

    // Send an error response if there's an issue with fetching data
    return res.status(500).json({
      success: false,
      message: "Error retrieving blog post. Please try again later.",
      error: error.message,
    });
  }
};

module.exports = getDestinationDetail;
