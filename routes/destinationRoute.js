const express = require("express");
const destinationRoute = express.Router();
const createBlog = require("../controllers/createNewDestination");
const getAllDestinations = require("../controllers/getAllDestinations");
// const getAllBlogs = require("../controllers/getAllBlogs");

destinationRoute.post("/createDestination", createBlog);
destinationRoute.get("/getAllDestinations", getAllDestinations);
// destinationRoute.get("/getDestinationBySlug/:slug", getBlogBySlug);

module.exports = destinationRoute;