import React, { useState } from "react";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import axios from "axios";

const Addcar = () => {
  const [image, setImage] = useState("");
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();

  const handleClick = async () => {
    const payload = { image, model, name, price };
    await axios.post("http://localhost:/3100/addcars", payload);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}></Grid>

      <Grid item xs={4}>
        <Card>
          <CardContent>
            <TextField
              variant="outlined"
              fullWidth
              label="Enter Image URL"
              onClick={(e) => setImage(e.target.value)}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Enter Model Here"
              onClick={(e) => setModel(e.target.value)}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Enter Name Here"
              onClick={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Enter Price Here"
              onClick={(e) => setPrice(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
              color="success"
              onClick={handleClick}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default Addcar;
