
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/Contact");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/cv/pdf", (req, res) => {
  res.download(
    path.join(__dirname, "files", "Rashi_Loya_Resume.pdf")
  );
});

app.get("/api/cv/docx", (req, res) => {
  res.download(
    path.join(__dirname, "files", "Rashi_Loya_Resume.docx")
  );
});

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio backend is running!" });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Your message has been saved successfully!",
      id: contact._id,
    });
  } catch (error) {
    console.error("Contact submission failed:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to save your message. Please try again.",
    });
  }
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
