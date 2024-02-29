const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const uri =
  "mongodb+srv://prathamcs22:BMSCE@cluster0.i9yblow.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const app = express();
const port = 3000; // You can choose a different port

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/submitForm", async (req, res) => {
  const { name, number, email, date } = req.body; // Get user's email and role from request body

  try {
    // Connect to MongoDB Atlas
    await client.connect();

    // Access the users database
    const database = client.db("booking");

    // Determine the collection based on user's role
    const collectionName = "Booking"; // Replace 'bookings' with the actual name of your MongoDB collection
    const collection = database.collection(collectionName);

    // Insert the user account based on the provided data
    const result = await collection.insertOne({ name, number, email, date });
    console.log(result);

    // Retrieve the user data
    const result1 = await collection.findOne({ name, number, email, date });
    console.log(result1);

    // Check if the user account was inserted successfully
    if (result.acknowledged) {
      res.status(200).json({
        success: true,
        message: "Account successfully inserted!",
        bookingDetails: result1, // Include the retrieved data in the response
      });
    } else {
      res
        .status(404)
        .json({ success: false, message: "User account not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
