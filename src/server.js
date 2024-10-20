import express from "express";
import listEndpoints from "express-list-endpoints";
import { app } from "./app.js";
import dotenv from "dotenv/config";
import mongoose from "mongoose";
import { startScheduler } from './scheduler.js';
// import seedExercises from '../src/seeder/seedExercises.js'
// import sampleRoute from "./services/sampleRoute"

// express servr is initialized and exported from app.js
// app.js also contains the routes for the server

// PORT
const port =  process.env.PORT || 3000;

// app.listen(port, () => {
//   console.table(listEndpoints(app));
//   console.log(`Server is running on port ${port}`);
// });

// connect to database
mongoose.connect(process.env.MONGODB_URI_REMOTE);

mongoose.connection.on("connected", () => {
  //checks if the connection is established
  console.log("Mongo Connected!");

  app.listen(port, () => {
    console.table(listEndpoints(app));

    console.log(`Server running on port ${port}`);
    // seedExercises();
    startScheduler();
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
