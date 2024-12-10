const express = require("express");
const blogRoute = express.Router();
const createBlog = require("../controllers/createBlog");
const getBlogBySlug = require("../controllers/getBlogBySlug");
const getAllBlogs = require("../controllers/getAllBlogs");

blogRoute.post("/createBlog", createBlog);
blogRoute.get("/getAllBlogs", getAllBlogs);
blogRoute.get("/getBlogBySlug/:slug", getBlogBySlug);

module.exports = blogRoute;