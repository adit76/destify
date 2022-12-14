import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const RoomCard = () => {
  const theme = useTheme();

  return (
    <Card sx={{ marginY: 2 }}>
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          sx={{ bgcolor: theme.palette.secondary.main }}
          aria-label="recipe"
        >
          <MeetingRoomIcon />
        </Avatar>

        <Box ml={1}>
          <Typography variant="subtitle1" component="div">
            No Past Rooms
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We couldnot findany past room in your account
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
