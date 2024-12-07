const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [255, "Title cannot exceed 255 characters"],
    },
    date: {
      type: Date,
      default: Date.now, 
    },
    createdBy: {
      type: String,
      required: [true, "Creator's name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    readingTime: {
      type: String,
      required: [true, "Reading time is required"],
    },
    subtitle: {
      type: String,
      trim: true,
      maxlength: [255, "Subtitle cannot exceed 255 characters"],
    },
    img: {
      type: String,
      required: [true, "Image URL is required"],
      validate: {
        validator: function (v) {
          return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/.test(v); // Checks for valid image formats
        },
        message: (props) => `${props.value} is not a valid image URL!`, // Custom error message
      },
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Description must be at least 10 characters long"], // Custom message for too short descriptions
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    pageTitle: {
      type: String,
      required: [true, "Page title is required"],
      trim: true,
      maxlength: [255, "Page title cannot exceed 255 characters"],
    },
    routeName: {
      type: String,
      required: [true, "Route name is required"],
      trim: true,
      maxlength: [255, "Route name cannot exceed 255 characters"],
    },
  },
);

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
