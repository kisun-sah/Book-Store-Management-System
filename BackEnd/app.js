// Importing required modules
const express = require("express");
const dotenv = require("dotenv");

// Configure environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Import database connection
require("./connection/conn");

// Import routes
const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");
const favourateRoutes = require("./routes/favourate");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order")

// Middleware to parse JSON requests
app.use(express.json());

// API routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", bookRoutes);
app.use("/api/v1", favourateRoutes);
app.use("/api/v1", cartRoutes);
app.use("/api/v1", orderRoutes);

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
