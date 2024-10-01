import mongoose from "mongoose";
import createUserService from "../../services/createUserService.js";
import { validationResult } from "express-validator";
import User from "../../models/userSchema.js";
import Level from "../../models/levelSchema.js"
import GymType from "../../models/gymTypeSchema.js"
import GymGoal from "../../models/gymGoalSchema.js"
import loginUser from "../../services/login.js";
import { resetToken } from "../../services/resetTokens.js";
//this is the schema that contains collections of workout history.
import CompleteWorkoutweek from "../../models/completedWorkoutWeekSchema.js"
import axios from 'axios';
import { sendMail } from '../../middleware/sendEmail.js'
import PasswordReset from "../../models/passwordResetSchema.js"
import bcrypt from "bcrypt";
/**
 *  The user controller
 * @namespace userController
 */
export const userController = {

  getLevelRef: async(req, res, next) => {
    try {
      // Fetch all currencies from the database
      const levels = await Level.find();
      console.log(`${levels}`)
      // Return the currencies as a JSON response
      res.json(levels);
    }
    catch (error) {
      console.warn("ERROR: ", error.message);
      res.json({error: error.message})
    }
  },

  getGymTypeRef: async(req, res, next) => {
    try {
      // Fetch all currencies from the database
      const types = await GymType.find();
      console.log(`${types}`)
      // Return the currencies as a JSON response
      res.json(types);
    }
    catch (error) {
      console.warn("ERROR: ", error.message);
      res.json({error: error.message})
    }
  },

  getGymGoalRef: async(req, res, next) => {
    try {
      // Fetch all currencies from the database
      const types = await GymGoal.find();
      console.log(`${types}`)
      // Return the currencies as a JSON response
      res.json(types);
    }
    catch (error) {
      console.warn("ERROR: ", error.message);
      res.json({error: error.message})
    }
  },

  resetWorkoutWeeks: async (req, res, next) => {
    try {
      const { _id } = req.body;
      console.log(`reset for ${_id}`)
      
      if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).json({ error: 'Invalid request parameters' });
      }
      console.log(`find user ${_id}`)
      const user = await User.findOneAndUpdate(
        { _id }, // Find the user by _id
        {
          $set: {
            'workoutPlans.$[].complete': false, // Update all workoutPlans.complete to false
            'workoutPlans.$[].completed_date': null, // Set completed_date to null
          },
        },
        { multi: true } // Update all matching elements
      );
      console.log(`found user ${_id}`)
      if (!user) {
        console.error(`User with _id ${_id} not found`);
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User workout plans reset successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  

  setCompleteWeek: async(req, res, next) => {
    const userObj = req.body;
    console.log(`${userObj._id}::${userObj.weekid}::${userObj.complete}`);
    try {
      const { _id, weekid, complete } = req.body;
  
      if (!mongoose.Types.ObjectId.isValid(_id) || complete === undefined) {
        return res.status(400).json({ error: 'Invalid request parameters' });
      }
  
      const user = await User.findOneAndUpdate(
        { 'workoutPlans._id': weekid },
        {
          $set: {
            'workoutPlans.$.complete': complete,
            'workoutPlans.$.completed_date': complete ? new Date() : null,
          },
        }
      );
  
      if (!user) {
        console.error(`User with _id ${_id} not found`);
        return res.status(404).json({ error: 'User not found' });
      }

      // Now, create a new CompleteWorkoutWeek instance and save it.  This CompoleteWorkoutWeek is used for insights data
      if (complete) {
        const completedWeekData = user.workoutPlans.find((week) => week._id.toString() === weekid);
        if (completedWeekData) {
          const completeWeek = new CompleteWorkoutweek({
            userId: _id, // Set the user's ID
            completedDate: new Date(), // Set the completion date
            weekData: completedWeekData, // Set the completed week data
          });

          // Save the completed week
          await completeWeek.save();
        }
      }
  
      return res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    
  },

  /**
   * @funtion getWeeklyPlan
   * @memberof userController
   * @param {Object} req The express request object
   * @param {Object} res The express response object
   * @param {Object} next The express next function
   */
  getWeeklyPlan: async(req, res, next) => {
    try {

      const userobj = req.query.email
      console.log(`Email ${userobj}`)
      // Validate that _id is provided
      /*if (!email) {
        return res.status(400).json({ message: 'Missing _id in the request body' });
      }*/
  
      // Define your collation settings
      const collationSettings = {
        locale: "en_US", // Specify the locale
        caseLevel: false, // Enable case sensitivity
        strength: 1, // Specify the strength (1 for primary, 2 for secondary, etc.)
      };
  
      // Query the database with collation settings
      /*const result = await User.find(
        {email:userobj.email}, // Query by _id
        { workoutPlans: 1, _id: 0 }, // Projection (null to retrieve all fields)
        { collation: collationSettings }
      );*/

      const result = await User.aggregate([
        { $match: { email: userobj } }, // Match the user by email
        {
          $project: {
            workoutPlans: {
              $filter: {
                input: '$workoutPlans',
                as: 'workoutPlan',
                cond: { $eq: ['$$workoutPlan.complete', false] },
              },
            },
          },
        },
        { $unwind: '$workoutPlans' }, // Unwind the filtered workoutPlans array
        { $limit: 1 }, // Limit to the first document
      ]);
  
      if (result.length === 0) {
        return res.status(404).json({ message: 'No exercises avaialbe.' });
      }
  
      // Assuming you want to send the workoutPlans array in the response
      const workoutPlans = result[0].workoutPlans;
  
      res.json(workoutPlans);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  /**
   * @funtion createUser
   * @memberof userController
   * @param {Object} req The express request object
   * @param {Object} res The express response object
   * @param {Object} next The express next function
   */
  createUser: async (req, res, next) => {
    console.log("req data while user creation",req)
    const errorsList = validationResult(req);
    try {
      if (errorsList.isEmpty()) {
        console.log(1);
        await createUserService(req, res);
      } else {
        console.log("user creation error list in else are:#@#@",errorsList,errorsList?.array())
        res.status(401).send({ errors: errorsList });
      }
    } catch (error) {
      console.log("user creation error list in catch block are:#@#@",errorsList,errorsList?.array(),error)
      res.status(401).send({ errors: error });
    }
  },
  /**
   * The login user controller returns an access token and a refresh token
   * @funtion userLogin
   * @memberof userController
   * @param {Object} req The express request object
   * @param {Object} res The express response object
   * @param {Object} next The express next function
   * @returns {Object} The user information and token in the header
   */
  userLogin: async (req, res, next) => {
    try {
      const errorsList = validationResult(req);
      if (errorsList.isEmpty()) {
        await loginUser(req, res, next);
      } else {
        let error = new Error();
        error.httpStatusCode = 500;
        error.message = errorsList;
        throw error;
      }
    } catch (error) {
      res.status(500).send(error);
      return undefined;
    }
  },
  allUsers: async(req, res, next) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  /**
   * The user info controller returns the user info
   * @funtion userInfo
   * @memberof userController
   * @param {Object} req The express request object
   * @param {Object} res The express response object
   * @param {Object} next The express next function
   * @returns {Object} The user info
   */
  userInfo: async (req, res, next) => {
    try {
      console.log({ body: req.query });
      const user = await User.findById(req.query._id);
      console.log({ user });
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
      return undefined;
    }
  },
  /**
   * The delete user controller returns the user info
   * @funtion deleteUser
   * @memberof userController
   * @param {Object} req The express request object
   * @param {Object} res The express response object
   * @param {Object} next The express next function
   * @returns {Object} response object with confirmation message
   */
  deleteUser: async (req, res, next) => {
    try {
      let id = req.params.userid;
      let deleteResponse = await User.findByIdAndDelete(id);
      console.log("THE DELETE RESPONSE", deleteResponse);
      if (deleteResponse !== null) {
        res.status(200).send({ message: "User deleted" });
        return undefined;
      } else {
        res.status(404).send({ message: "User not found" });
        return undefined;
      }
    } catch (error) {
      return res.status(500).send({ message: "Something went wrong" });
    }
  },
  /**
   * The reset refresh token controller returns the user info and a new refresh token and access token
   * @funtion resetRefreshToken
   * @memberof userController
   * @param {Object} req The express request object
   * @param {Object} res The express response object
   * @param {Object} next The express next function
   * @returns {Object} response object new refresh token and access token
   */
  resetRefreshToken: async (req, res, next) => {
    const errorsList = validationResult(req);
    try {
      if (errorsList.isEmpty()) {
        await resetToken(req, res, next);
      } else {
        throw new Error(errorsList);
      }
      return undefined;
    } catch (error) {
      return res
        .status(500)
        .send({ status: "failure", message: "Something went wrong" });
    }
  },

  updateUser: async (req, res, next) => {
    // const user_data = req.body;

    try {
      const data = req.body;
      const user = await User.findById(data._id);
      if (!user) return res.status(404).json({ msg: "User not found" });

      const updates = Object.keys(req.body);
      updates.forEach((update) => (user[update] = req.body[update]));
     
      if (req.file) {
        user.avatar = req.file.path; // Save the file path (or any other field)
      }
      await user.save();
      let updatedUser = await User.findById(data._id);
      res.status(201).json(updatedUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },



  updateUserWorkoutPlan: async (req, res, next) => {
    // const user_data = req.body;

    try {
      const data = req.body;
      //need index which is the workout week.
      console.log(`updateUserTO ${JSON.stringify(data.userid)}::
                                ${JSON.stringify(data.index)}`);
      const user = await User.findById(data.userid);
      console.log(`updatingFROM ${JSON.stringify(user._id)}::
                                ${JSON.stringify(user.name)}::
                                ${JSON.stringify(user.workoutPlans[data.index].complete)}`);
      if (!user) return res.status(404).json({ msg: "User not found" });
      //once user is found, just update
      user.workoutPlans[data.index].complete = true
      user.workoutPlans[data.index].completed_date = new Date();
      //const updates = Object.keys(req.body).filter(update => update !== '_id');
      //console.log(`updates ${JSON.stringify(updates)}`)
      //updates.forEach(update => (user[update] = req.body[update]));
      await user.save();
      
      
      let updatedUser = await User.findById(data.userid);
      console.log(`updatedUser ${updatedUser.workoutPlans[data.index].complete}`)
      res.status(201).json(updatedUser);
    } catch (err) {
      console.error(`UpdateUser Error ${err.message}`);
      console.error(`UpdateUser Error ${err.message}`);
      res.status(500).send("Server error");
    }
  },

  getWorkoutHistory: async (req, res, next) => {
      try {
          const userId = req.query.userid;
                    console.log(`Getting Workout History for ${userId}`)
          // Find completed workout data for the user
          const completedWorkouts = await CompleteWorkoutweek.find({ userId });

          // Calculate the number of completed weeks
          const completedWeeks = completedWorkouts.length;

          // Find the user's registration date (assuming you have a registeredDate field)
          //const user = await User.findById(userId)
          User.findById(userId)
          .then(user => {
            //console.log(`Userobj ${new Date(user.createdAt)}`)
            // Calculate the duration in days
            const registrationDate = user.registeredDate;
            const currentDate = new Date();
            const durationInDays = Math.floor((currentDate - registrationDate) / (1000 * 60 * 60 * 24));
            // Calculate completion rate
            const completionRate = (completedWeeks / durationInDays) * 100;
            console.log(`workouthistory ${registrationDate}::${currentDate}::${durationInDays}`)
            // Prepare a report object
          const report = {
            completedWeeks,
            durationInDays,
            completionRate,
          };

          return res.json(report);
          })
      }
      catch(error) {
        console.error('Error generating workout report:', error);
        throw error;
      }
  },

  getWorkoutHistorySummary: async (req, res, next) => {
    try {
      const apiKey = process.env.OPEN_AI_KEY
      console.log(`APIKEY ${apiKey}`)

      // Read the workout data from the request body
      const { completedWeeks, durationInDays, completionRate } = req.body;

      // Check if the data is valid
      if (typeof completedWeeks !== 'number' || typeof durationInDays !== 'number' || typeof completionRate !== 'number') {
          return res.status(400).json({ error: 'Invalid input data' });
      }

      const data = {
          completedWeeks,
          durationInDays,
          completionRate,
      };

      /*const data = {
        completedWeeks: 7,
        durationInDays: 48,
        completionRate: 14.58,
      };*/

      axios.post(
        'https://api.openai.com/v1/engines/text-davinci-002/completions',
        {
          prompt: `Summarize workout data: Completed Weeks: ${data.completedWeeks}, Duration Between Weeks: ${data.durationInDays} days, Completion Rate: ${data.completionRate}%.`,
          max_tokens: 50, // Adjust as needed
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      )
      .then(response => {
        console.log(response.data.choices[0].text);
        return res.json(response.data.choices[0].text)
      })
      .catch(error => {
        console.error(error);
      });

      
    }
    catch(error) {
      console.error('Error generating workout history completion:', error);
      throw error;
    }
  },

  getUserWeekNumber: async(req, res, next) => {
      try {
            
        // Extract the user ID from the request, assuming it's passed as a parameter
        const userId = req.params.userId;
        const objectId = mongoose.Types.ObjectId(userId); 
        
        // Query the database to count the number of records for this user
        const count = await CompleteWorkoutweek.countDocuments({ userId: objectId });
        console.log(`Getting current week number ${count} for ${userId}`)
        // Send the count as a response
        res.json({ weekNumber: count });
      }
      catch(error) {
        console.error('Unable to determine user\'s current week', error);
        res.status(500).send('Error in fetching user week number');
      }
  },

  passwordResetEmail: async (req, res, next) => {
    const errorsList = validationResult(req);
    console.log(errorsList);
    try {
      if (errorsList.isEmpty()) {
        const filter = { email: req.body.email };
        const user = await User.findOne({ email: req.body.email }).select('email name').exec();
        console.log(user);
        const token = Math.floor(Math.random() * 900000) + 100000;
        if (user) {
          const set = { email: req.body.email, created_at: new Date().toISOString(), token: token };
          sendMail(2, req.body.email, token, user.name);
          PasswordReset.findOneAndUpdate(filter, { $set: set }, {
            new: true,
            upsert: true // Make this update into an upsert
          })
            .then((userRes) => {
              return res.status(200).json({
                message: ['Password reset token is sent on your email']
              });
            })
            .catch((error) => {
              return res.status(500).json({
                message: error.message,
                error
              });
            });
        } else
          return res.status(204).json({
            message: ['No User found']
          });
      } else {
        //throw new Error(errorsList);
        return res.status(400).json({ errors: errorsList.array() });

      }

    } catch (error) {
      return res
        .status(500)
        .send({ status: "failure", message: "Something went wrong" + error });
    }


  },

  resetPassword: async (req, res, next) => {
    try {
      console.log(req.body);
      const errorsList = validationResult(req);
      if (errorsList.isEmpty()) {
        const filter = { email: req.body.email, token: req.body.token };
        const userPasswordReset = await PasswordReset.findOne(filter).exec();
        if (userPasswordReset) {
          PasswordReset.deleteOne({ email: req.body.email, token: req.body.token }).exec();
          const filter = { email: req.body.email };
          const existingUser = await User.findOne(filter).exec();
          if (existingUser) {
            const set = { password: await bcrypt.hash(req.body.password, 10) };
            User.findOneAndUpdate(filter, { $set: set }, { new: true })
              .then((userRes) => {
                return res.status(200).json({
                  message: ['Password Change Successfully']
                });
              })
              .catch((error) => {
                return res.status(500).json({
                  message: error.message,
                  error
                });
              });
          } else {
            return res.status(409).json({
              errors: ['Email not available']
            });
          }

        } else {
          return res.status(409).json({
            errors: ['User not found']
          });
        }
      } else {
        return res.status(400).json({ errors: errorsList.array() });
      }
    } catch (error) {
      return res
        .status(500)
        .send({ status: "failure", message: "Something went wrong" + error });
    }

  },

// new controller for footsteps
  storeFootSteps: async(req, res, next) => {
    const { userId, date, steps } = req.body;

    try {
      // Find the user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Check if the date already exists in stepTracker
      const existingEntry = user.stepTracker.find((entry) => entry.date.toISOString().split('T')[0] === date);
  
      if (existingEntry) {
        // Update steps for the existing date
        existingEntry.steps = steps;
      } else {
        // Add a new entry to stepTracker
        user.stepTracker.push({ date: new Date(date), steps });
      }
  
      // Save the updated user document
      await user.save();
  
      res.status(200).json({ message: "Footsteps data stored successfully" });
    } catch (error) {
      console.error("Error storing footsteps data:", error);
      res.status(500).json({ error: "Internal server error" });
    }

  },

  getFootStepsOnTheBaseOfUserId:async(req, res, next) => {

    const { userId } = req.params;

  try {
    // Find the user by ID and select the stepTracker field
    const user = await User.findById(userId).select("stepTracker");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.stepTracker);
  } catch (error) {
    console.error("Error fetching footsteps data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
  
},

getTotalFootStepsOfAllUser: async (req, res, next) => {
  const { month } = req.params;

  try {
    // Parse the provided month and set the start and end dates
    const startDate = new Date(`${month}-01`); // Start of the month
    const currentDate = new Date(); // Current date

    // Ensure the endDate is within the same month
    let endDate;
    if (currentDate.getMonth() + 1 === startDate.getMonth() + 1 && currentDate.getFullYear() === startDate.getFullYear()) {
      endDate = currentDate; // Use the current date if the month is the same
    } else {
      endDate = new Date(startDate);
      endDate.setMonth(endDate.getMonth() + 1); // Start of the next month
    }

    // Use an aggregate query to calculate the total steps for each user for the specified month
    const users = await User.aggregate([
      { $unwind: "$stepTracker" }, // Deconstructs the stepTracker array
      {
        $match: {
          "stepTracker.date": {
            $gte: startDate, // Start of the current month
            $lt: endDate, // Up to the current date or start of the next month
          },
        },
      },
      {
        $group: {
          _id: "$_id", // Group by userId
          name: { $first: "$name" }, // Get the user's first name
          surname: { $first: "$surname" }, // Get the user's surname
          totalSteps: {
            $sum: {
              $cond: {
                if: { $or: [{ $eq: ["$stepTracker.steps", null] }, { $eq: ["$stepTracker.steps", undefined] }, { $eq: ["$stepTracker.steps", 0] }] },
                then: 0,
                else: "$stepTracker.steps",
              },
            },
          }, // Sum steps, but handle null, undefined, or 0 values
        },
      },
      {
        $project: {
          _id: 0, // Exclude _id from the result
          userId: "$_id", // Rename _id to userId
          username: { $concat: ["$name", " ", "$surname"] }, // Concatenate name and surname as username
          totalSteps: 1,
        },
      },
    ]);
    res.status(200).json({ month, users });
  } catch (error) {
    console.error("Error fetching total footsteps count:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

};
