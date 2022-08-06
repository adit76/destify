import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface Props {
  roomList: Array<{ roomId: string; name: string }>;
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
          {roomList.map((roomItem, index) => (
            <Tab key={index} label={roomItem.name} />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};

export default ScrollTabs;
