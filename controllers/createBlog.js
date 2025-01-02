const Blog = require("../models/Blog");

// Controller to handle creating a new blog post
const createBlog = async (req, res) => {
  const {
    title,
    date,
    createdBy,
    readingTime,
    subtitle,
    img,
    description,
    category,
    pageTitle,
    url,
    metaDescription,
  } = req.body;

  // const normalizedRouteName = url.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  try {
    // Check if the normalized routeName already exists in the database
    const existingBlog = await Blog.findOne({ url: url });

    if (existingBlog) {
      return res.status(400).json({
        success: false,
        message: "Route name already exists. Please choose a different one.",
      });
    }

    // Create and save the new blog post with the normalized routeName
    const newBlog = new Blog({
      title,
      date,
      createdBy,
      readingTime,
      subtitle,
      img,
      description,
      category,
      pageTitle,
      metaDescription,
      url,
    });

    // Save the blog to the database
    await newBlog.save();

    // Send success response
    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
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
      message: "Error creating blog. Please try again later.",
    });
  }
};

module.exports = createBlog;
