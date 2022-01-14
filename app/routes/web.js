
const
  Router = require("express").Router(), 
  HomeController = require("../controller/Home");
  

Router.get("/", HomeController.index);

module.exports = Router;