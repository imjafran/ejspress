const express = require("express"),
  app = express(),
  path = require("path"), 
  cors = require("cors");
  ejs = require("ejs");

/**
 * Initializing Environment Variables
 */
require("dotenv").config();

global.app = app; // To access globally


/**
 * Port of the application
 */
app.set("port", process.env.PORT || 3000);

/** 
 * View Template Engine
 */ 

ejs.delimiter = process.env.DELIMITER || "?";
app.set("views", path.join(global.dir, "views"));
app.set("view engine", "ejs");

/**
 * Load configured CORS settings
 */
app.use(cors({ origin: "*" }));

/**
 * Parsing JSON/URLEncoded form request from body
 */
app.use(express.json());  
app.use(express.urlencoded({ extended: false })); 

/**
 * Static path access for public resources
 */
app.use(express.static(path.join(global.dir, "public")));

/**
 * Load the routes when the router files are ready
 */
app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));

/**
 * Handle the error 
 */
app.use(function (req, res, next) {
  next(createError(404));
});

/**
 * Navigate to error 404
 */
app.use(function (err, req, res, next) {
  res.status(404).render("error/404", {
    title: "Not found",
    code: 404,
  });
});

/**
 * Start the APP
 */

app.listen(process.env.PORT || 3000, () => {
  console.log("\n\tApp started at http://localhost:" + (process.env.PORT || 3000) + "\n");
});


module.exports = app;
