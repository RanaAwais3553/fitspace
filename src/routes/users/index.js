import express from "express";
// import { userLogin, createUser, userInfo, deleteUser } from "../../controllers/users/index.js";
import { userController } from "../../controllers/users/index.js";
import {
  newUserValidation,
  tokenValidation,
  userLoginValidation,
  forgotPasswordValidation,
  resetPasswordValidation
} from "../../validation/index.js";
import upload from '../../middleware/profileImageMiddleware.js'
import verifyTokenMiddle from "../../middleware/verifyTokenMiddle.js";
const userRoute = express.Router();

userRoute.post("/new", newUserValidation, userController.createUser);
userRoute.post("/login", userLoginValidation, userController.userLogin);
userRoute.get("/self", userController.userInfo);
userRoute.get("/allusers", userController.allUsers)
userRoute.put(
  "/refreshToken",
  verifyTokenMiddle,
  tokenValidation,
  userController.resetRefreshToken 
); 
// userRoute.put("/update",verifyTokenMiddle, userController.updateUser)
userRoute.put("/update",upload.single('profileImage'), userController.updateUser);
// userRoute.put("/update", userController.updateUser);
userRoute.put("/update/userworkoutplan", userController.updateUserWorkoutPlan);
userRoute.delete("/:userid", verifyTokenMiddle, userController.deleteUser);
userRoute.get("/workoutplan/weekly", userController.getWeeklyPlan);
userRoute.post("/workoutplan/complete", userController.setCompleteWeek);
userRoute.post("/workoutplan/reset", userController.resetWorkoutWeeks); 
//Reference schema contains all the symbols for Level, Gym Type, Gym Goal
userRoute.get("/levels", userController.getLevelRef);
userRoute.get("/gymtypes", userController.getGymTypeRef);
userRoute.get("/gymgoals", userController.getGymGoalRef);
userRoute.get("/insights/workout-history", userController.getWorkoutHistory)
userRoute.get("/insights/workout-history/completions", userController.getWorkoutHistorySummary)
userRoute.get("/current-week-number/:userId", userController.getUserWeekNumber)

userRoute.post("/forgot_password", forgotPasswordValidation, userController.passwordResetEmail)
userRoute.post("/reset_password", resetPasswordValidation, userController.resetPassword)
// new routes for footsteps
userRoute.post("/footsteps", userController.storeFootSteps)
userRoute.get("/footsteps/:userId",userController.getFootStepsOnTheBaseOfUserId)
userRoute.get("/footsteps/monthly/:month",userController.getTotalFootStepsOfAllUser)

export { userRoute };
