const Blog = require("../models/Blog"); // Adjust the path to your Blog model

const editBlog = async (req, res) => {
  try {
    const { blogSlug } = req.params; // Extract blogSlug (URL) from request params
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

    // Find the current blog by the slug (URL)
    const currentBlog = await Blog.findOne({ url: blogSlug });

    if (!currentBlog) {
      return res.status(404).json({ success: false, message: "Blog not found." });
    }

    // Check if the new URL already exists and is not the current blog's URL
    if (url && url !== currentBlog.url) {
      const existingBlog = await Blog.findOne({ url });
      if (existingBlog) {
        return res.status(400).json({
          success: false,
          message: "The provided URL is already associated with another blog.",
        });
      }
    }

    // Find and update the blog by slug
    const updatedBlog = await Blog.findOneAndUpdate(
      { url: blogSlug }, // Match the blog with the given slug
      {
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
      },
      { new: true, runValidators: true } // Return updated doc and validate
    );

    if (!updatedBlog) {
      return res.status(404).json({ success: false, message: "Blog not found." });
    }

    res.status(200).json({ success: true, data: updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ success: false, message: "Failed to update blog.", error });
  }
};

module.exports = editBlog;
