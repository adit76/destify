import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface Props {
  roomList: any;
  activeTab: number;
  handleTab: (event: React.SyntheticEvent, newValue: number) => void;
}

const ScrollTabs: React.FC<Props> = ({ roomList, activeTab, handleTab }) => {
  return (
    <div>
      {/* Tab Section */}
      <Box sx={{ bgcolor: "background.paper" }}>
        <Tabs
          value={activeTab}
          onChange={handleTab}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
        >
          {roomList.roomInfo?.map((room: any, index: number) => (
            <Tab key={index} label={room.room[0].roomName} />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};

export default ScrollTabs;
