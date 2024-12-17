const express = require("express");
const destinationRoute = express.Router();
const createBlog = require("../controllers/createNewDestination");
const getAllDestinations = require("../controllers/getAllDestinations");
const getDestinationDetail = require("../controllers/getDestinationDetail");

destinationRoute.post("/createDestination", createBlog);
destinationRoute.get("/getAllDestinations", getAllDestinations);
destinationRoute.get("/getDestinationBySlug/:slug", getDestinationDetail);

module.exports = destinationRoute;