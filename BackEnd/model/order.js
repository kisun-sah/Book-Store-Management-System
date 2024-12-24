const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User" }, // Corrected ref to "User"
    book: { type: mongoose.Types.ObjectId, ref: "Book" }, // Corrected ref to "Book"
    status: {
      type: String,
      default: "Order Placed",
      enum: ["Order Placed", "Out for delivery", "Delivered", "Canceled"], // Enum options
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

// Create a model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
