import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  const sendData = async (event, users) => {
    const response = await fetch(
      `http://localhost:8000/card/${users.id}/?name=${users.name}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          class: users.class,
        }),
      }
    );
  };
  const users = [
    { name: "usman 1", class: 10, id: 1 },
    { name: "usman 2", class: 20, id: 2 },
    { name: "usman 3", class: 30, id: 3 },
    { name: "usman 4", class: 40, id: 4 },
    { name: "usman 5", class: 50, id: 5 },
  ];

  return users.map((users) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {users.name} {users.class}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {users.id}
          </Typography>
          <button
            onClick={(event) => {
              sendData(event, users);
            }}
          >
            CLICK TO SEND DATA
          </button>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
}
