const Blog = require("../models/Blog");

// Controller to handle getting all blog posts
const getAllBlogs = async (req, res) => {
  try {
    // Fetch all blogs from the database
    const blogs = await Blog.find(); 

    // Check if blogs were found
    if (blogs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No blog posts found.",
      });
    }

    // Send a success response with the fetched blogs
    return res.status(200).json({
      success: true,
      message: "Blog posts retrieved successfully",
      blogs,
    });
  } catch (error) {
    console.error(error);

    // Send an error response if there's an issue with fetching data
    return res.status(500).json({
      success: false,
      message: "Error retrieving blog posts. Please try again later.",
      error: error.message,
    });
  }
};

module.exports = getAllBlogs;
