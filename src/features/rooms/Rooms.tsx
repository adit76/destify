import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import CheckIcon from "@mui/icons-material/Check";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import PersonIcon from "@mui/icons-material/Person";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import StarRateIcon from "@mui/icons-material/StarRate";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function Rooms() {
  // Tab Section
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Card Section
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      {/* Tab Section */}
      <Box sx={{ bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Room 1" />
          <Tab label="Room 2" />
          <Tab label="Room 3" />
          <Tab label="Room 4" />
          <Tab label="Room 5" />
          <Tab label="Room 6" />
          <Tab label="Room 7" />
        </Tabs>
      </Box>

      {/* Room Details Section */}
      <Card>
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: blue[600] }} aria-label="recipe">
            R
          </Avatar>

          <Box ml={1}>
            <Typography variant="subtitle1" component="div">
              Room Nickname
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Group Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hotel Name - Room Type
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Arrival Date - Departure Date
            </Typography>
          </Box>

          <IconButton sx={{ ml: "auto" }} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        </CardContent>
        <CardMedia
          component="img"
          height="194"
          image="https://img.freepik.com/premium-photo/cabinet-shelves-wall-design-room-with-decoration-lamp-plants-carpet-sofa-3d-rendering_43151-7292.jpg?w=2000"
          alt="Paella dish"
        />
        <CardContent>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Chip
              icon={<CheckIcon />}
              label="primary"
              color="primary"
              variant="outlined"
              size="small"
            />
            <Chip
              icon={<AttachMoneyIcon />}
              label="success"
              color="success"
              variant="outlined"
              size="small"
            />
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Room Type Descriptions from PTID Admin
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Modify" size="small" color="success">
            <EditLocationAltIcon />
            Modify
          </IconButton>
          <IconButton aria-label="Make Payment" size="small" color="success">
            <AttachMoneyIcon />
            Make Payment
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Divider />

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box py={1}>
              <Typography variant="h5" component="div">
                Guests in this room
              </Typography>
              <Stack direction="row" spacing={1} sx={{ my: 1 }}>
                <Chip
                  icon={<PersonIcon />}
                  label="Adult 1"
                  color="success"
                  variant="outlined"
                  size="small"
                />
                <Chip
                  icon={<PersonIcon />}
                  label="Adult 2"
                  color="success"
                  variant="outlined"
                  size="small"
                />
                <Chip
                  icon={<ChildCareIcon />}
                  label="Child 1"
                  color="success"
                  variant="outlined"
                  size="small"
                />
              </Stack>
            </Box>
          </CardContent>
          <Divider />

          <CardContent>
            <Box py={1}>
              <Typography variant="h5" component="div">
                Room Extras
              </Typography>
              <Stack direction="row" spacing={1} sx={{ my: 1 }}>
                <Chip
                  icon={<DepartureBoardIcon />}
                  label="Transfer Purchased"
                  color="success"
                  variant="outlined"
                  size="small"
                />
                <Chip
                  icon={<StarRateIcon />}
                  label="Travel Protection"
                  color="success"
                  variant="outlined"
                  size="small"
                />
              </Stack>
            </Box>
          </CardContent>
          <Divider />

          <CardContent>
            <Chip
              icon={<HighlightOffOutlinedIcon />}
              color="error"
              label="Cancel Room"
            />
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
