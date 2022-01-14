const
    Router = require("express").Router(),
    APIController = require("./../controller/API.v1")
 
Router.get("/", APIController.index);

module.exports = Router;
