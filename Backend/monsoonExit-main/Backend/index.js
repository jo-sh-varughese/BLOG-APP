const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());

// MongoDB connection
const connectionString = "mongodb+srv://mail2joshvarkey:U07v1BXq8FqHQq1E@cluster0.tdqly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Blog Schema and Model
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
});

const BlogModel = mongoose.model("Blog", blogSchema);

// POST API to create a new blog
app.post("/add", async (req, res) => {
  try {
    const { title, category, content, image } = req.body;
    if (!title || !category || !content || !image) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const newBlog = new BlogModel({ title, category, content, image });
    await newBlog.save();
    res.status(201).send({ message: "Blog added successfully", blog: newBlog });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error adding blog" });
  }
});

// GET API to fetch all blogs
app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching blogs" });
  }
});

// DELETE API to delete a blog
app.delete("/delete/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    await BlogModel.findByIdAndDelete(blogId);
    res.send({ message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error deleting blog" });
  }
});

// PUT API to update a blog
app.put("/update/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    const updatedData = req.body;
    const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, updatedData, { new: true });
    res.send({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error updating blog" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
