import { Card, CardContent, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Showcar = () => {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await axios.get("http://localhost:3100/getcars");
    setData(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((item) => {
        return (
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <img
                  src={item.image}
                  style={{ height: "200px", width: "200px" }}
                  alt=""
                />
                <h2>{item.model}</h2>
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Showcar;
