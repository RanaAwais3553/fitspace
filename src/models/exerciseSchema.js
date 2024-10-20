import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["pull","Pull","Push", "push","Legs", "legs", "core","Core", "kids","Kids", "lower body","Lower body", "cardio","Cardio"],
    required: true,
  },
  muscleGroup: [
    {
      type: String,
      required: true,
    },
  ],
  level: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    required: false,
  },
  mets: {
    type: Number,
    required: true,
  },
  distanceTime: {
    type: String,
    required: true,
  },
  sets: {
    type: Number,
    required: true, 
  },
  startingWeight: [
    {
      lbs: {
        type: Number,
        required: true,
      },
      kg: {
        type: Number,
        required: true,
      },
    }, 
  ],
  videoUrl: {
    type: String,
    required: true,
  },
  rep1:{
    type:String,
  },
  rep2:{
    type:String,
  },
  rep3:{
    type:String,
  }
});

export default mongoose.model("exercises", exerciseSchema);
