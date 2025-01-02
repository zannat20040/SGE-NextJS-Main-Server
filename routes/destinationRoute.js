const express = require("express");
const destinationRoute = express.Router();
const createDestination = require("../controllers/createNewDestination");
const getAllDestinations = require("../controllers/getAllDestinations");
const getDestinationDetail = require("../controllers/getDestinationDetail");
const deleteDestination = require("../controllers/deleteDestination"); 
const editDestination = require("../controllers/editDestination"); 

destinationRoute.post("/createDestination", createDestination);
destinationRoute.get("/getAllDestinations", getAllDestinations);
destinationRoute.get("/getDestinationBySlug/:slug", getDestinationDetail);
destinationRoute.delete("/deleteDestination/:id", deleteDestination); 
destinationRoute.put("/editDestination/:slug", editDestination); 

module.exports = destinationRoute;
