import React from "react";
import ScrollTabs from "./ScrollTabs";
import RoomCard from "./RoomCard";
import { getRoomDetails, selectRoom } from "./roomSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export function Rooms() {
  const dispatch = useAppDispatch();

  const [roomList] = React.useState([
    {
      roomId: "ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
      name: "Room 1",
    },
    {
      roomId: "4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
      name: "Room 2",
    },
    {
      roomId: "4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
      name: "Room 3",
    },
    {
      roomId: "ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
      name: "Room 4",
    },
    {
      roomId: "4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
      name: "Room 5",
    },
    {
      roomId: "ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
      name: "Room 6",
    },
    {
      roomId: "4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
      name: "Room 7",
    },
    {
      roomId: "ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
      name: "Room 8",
    },
  ]);

  const [activeTab, setActiveTab] = React.useState(0);

  const room = useAppSelector(selectRoom);

  const [roomDetails, setRoomDetails] = React.useState({});

  // Handle Room tab Change
  const handleTab = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    dispatch(getRoomDetails(roomList[newValue].roomId));
  };

  // Room Info
  React.useEffect(() => {
    setRoomDetails(room.roomDetails);
  }, [room]);

  // Fallback when page is not loaded
  React.useEffect(() => {
    dispatch(getRoomDetails(roomList[activeTab].roomId));
  }, []);

  return (
    <div>
      {/* Tab Section */}
      <ScrollTabs
        activeTab={activeTab}
        roomList={roomList}
        handleTab={handleTab}
      />
      {/* Room Details Section */}
      {room.status === "success" ? (
        <RoomCard roomDetails={roomDetails} />
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
    </div>
  );
}
