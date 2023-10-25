import mongoose from "mongoose";

// Create user schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Create Hedonic schema
const HedonicSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    tagName: {
        type: String,
        unique: true,
        required: true,
    }, // Tag name for the array
    dataArray: [
      {
        name: String,
        value: Number,
        coefficient: Number,
      },
    ],
  });
  

const User = mongoose.model("users", UserSchema);
const Hedonic = mongoose.model("hedonic", HedonicSchema)

export { User, Hedonic };