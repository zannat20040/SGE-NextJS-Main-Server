const express = require("express");
const blogRoute = express.Router();
const createBlog = require("../controllers/createBlog");
const getBlogBySlug = require("../controllers/getBlogBySlug");
const getAllBlogs = require("../controllers/getAllBlogs");
const deleteBlog = require("../controllers/deleteBlog");

blogRoute.post("/createBlog", createBlog);
blogRoute.get("/getAllBlogs", getAllBlogs);
blogRoute.get("/getBlogBySlug/:slug", getBlogBySlug);
blogRoute.delete("/deleteBlog/:id", deleteBlog);

module.exports = blogRoute;
