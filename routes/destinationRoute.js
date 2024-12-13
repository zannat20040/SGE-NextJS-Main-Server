const express = require("express");
const destinationRoute = express.Router();
const createBlog = require("../controllers/createNewDestination");
// const getBlogBySlug = require("../controllers/getBlogBySlug");
// const getAllBlogs = require("../controllers/getAllBlogs");

destinationRoute.post("/createDestination", createBlog);
// destinationRoute.get("/getAllDestination", getAllBlogs);
// destinationRoute.get("/getDestinationBySlug/:slug", getBlogBySlug);

module.exports = destinationRoute;