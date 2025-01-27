const mongoose = require("mongoose");

// Replace <your_connection_string> with the actual connection string to your MongoDB database
const connectionString = "mongodb+srv://mail2joshvarkey:U07v1BXq8FqHQq1E@cluster0.tdqly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose
  .connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error);
  });
