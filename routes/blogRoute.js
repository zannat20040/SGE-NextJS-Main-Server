const express = require("express");
const blogRoute = express.Router();
const createBlog = require("../controllers/createBlog");
const getBlogById = require("../controllers/getBlogById");
const getAllBlogs = require("../controllers/getAllBlogs");

blogRoute.post("/createBlog", createBlog);

module.exports = blogRoute;
