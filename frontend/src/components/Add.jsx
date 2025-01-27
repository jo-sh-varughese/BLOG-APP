import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  // State to manage input fields
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    img_url: "",
  });

  // Handler for input changes
  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // Function to submit the data
  const addData = () => {
    axios
      .post("http://localhost:3001/add", inputs) // Ensure the backend route is correct
      .then((res) => {
        alert(res.data.message); // Show a success message
        navigate("/"); // Navigate to the homepage or blog list
      })
      .catch((err) => {
        console.error("Error adding data:", err); // Log error for debugging
        alert("Failed to add blog. Please try again."); // Show error message
      });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "600px",
          }}
        >
          {/* Title Input */}
          <TextField
            variant="outlined"
            placeholder="Title"
            onChange={inputHandler}
            name="title"
            value={inputs.title}
            fullWidth
          />

          {/* Content Input */}
          <TextField
            variant="outlined"
            placeholder="Content"
            onChange={inputHandler}
            name="content"
            value={inputs.content}
            multiline
            rows={4} // Corrected `multiline` prop
            fullWidth
          />

          {/* Image URL Input */}
          <TextField
            variant="outlined"
            placeholder="Image URL"
            onChange={inputHandler}
            name="img_url"
            value={inputs.img_url}
            fullWidth
          />

          {/* Submit Button */}
          <Button variant="contained" color="secondary" onClick={addData}>
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Add;
