const Blog = require("../models/Blog");
// Controller to handle getting a single blog post by ID

const getBlogById = async (req, res) => {
  const { id } = req.params; // Get blog ID from request parameters

  try {
    // Fetch the blog post by ID
    const blog = await Blog.findById(id);

    // Check if the blog post exists
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found.",
      });
    }

    // Send a success response with the blog data
    return res.status(200).json({
      success: true,
      message: "Blog post retrieved successfully",
      blog,
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

module.exports = getBlogById;
