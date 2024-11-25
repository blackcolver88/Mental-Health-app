// Importing modules
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const db = require('./models');
const userRoutes = require('./Routes/userRoutes');

// Setting up the port from the environment variable or default to 8083
const PORT = process.env.PORT || 8083;

// Assigning the variable app to express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS for all routes
app.use(cors());

// Sync the database
db.sequelize.sync({ alter: true }) // Use 'alter: true' to avoid data loss in dev environments
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((error) => {
    console.error("Error syncing the database:", error);
  });

// User API Routes
app.use('/api/users', userRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
