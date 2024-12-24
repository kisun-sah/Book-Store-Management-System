const mongoose = require("mongoose");

// Define the schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true }, // Fixed "require" to "required"
    avatar: {
      type: String,
      default:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"], // Ensures only "user" or "admin" values are allowed
    },
    favourites: [{ type: mongoose.Types.ObjectId, ref: "Book" }], // Fixed "favourates" to "favourites"
    cart: [{ type: mongoose.Types.ObjectId, ref: "Book" }],
    orders: [{ type: mongoose.Types.ObjectId, ref: "Order" }], // Consistent casing for "orders"
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create a model
const User = mongoose.model("User", userSchema);

module.exports = User;
