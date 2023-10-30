import { Button, Grid } from "@mui/material";
import React from "react";
import { navData } from "./navData";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Grid container spacing={2}>
      {navData.map((item) => (
        <Grid item xs={3}>
          <Link to={item.path}>
            <Button variant="contained" fullWidth color="warning">
              {item.label}
            </Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
