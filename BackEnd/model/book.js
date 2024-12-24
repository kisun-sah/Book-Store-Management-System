const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    saleprice: { type: Number, required: true },
    category: { type: String, required: true }, // Category or genre of the book
    language: {type: String , require:true},
    description: { type: String, default: "" },
    coverImage: { 
      type: String, 
      default: "https://via.placeholder.com/150" // Placeholder image URL
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

// Create a model
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
