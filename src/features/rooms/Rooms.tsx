import React from "react";
import ScrollTabs from "./ScrollTabs";
import RoomCard from "./RoomCard";
import PastRooms from "./PastRooms";
import { getRoomDetails, selectRoom } from "./roomSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export function Rooms() {
  const dispatch = useAppDispatch();

  const [roomList] = React.useState([
    "ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
    "4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
  ]);

  const [activeTab, setActiveTab] = React.useState(0);

  const room = useAppSelector(selectRoom);

  const [roomDetails, setRoomDetails]: any = React.useState({});

  // Handle Room tab Change
  const handleTab = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  React.useEffect(() => {
    setRoomDetails(room.roomDetails);
  }, [room]);

  // Getting RoomInfo
  React.useEffect(() => {
    dispatch(getRoomDetails(roomList.join(",")));
  }, []);

  return (
    <Container sx={{ padding: 0, marginY: 2 }}>
      {/* Room Details Section */}
      {room.status === "success" ? (
        <div>
          {/* Tab Section */}
          <ScrollTabs
            activeTab={activeTab}
            roomList={roomDetails}
            handleTab={handleTab}
          />
          <RoomCard
            roomDetails={roomDetails?.roomInfo}
            activeRoom={activeTab}
          />

          <PastRooms />
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 615,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
}
