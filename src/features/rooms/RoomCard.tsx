import React from "react";
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
import { useTheme } from "@mui/material/styles";
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
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

interface Props {
  roomDetails: any;
  activeRoom: number;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RoomCard: React.FC<Props> = ({ roomDetails, activeRoom }) => {
  // Card Section
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const theme = useTheme();

  return (
    <React.Fragment>
      {roomDetails ? (
        <Card>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{ bgcolor: theme.palette.secondary.main }}
              aria-label="recipe"
            >
              <MeetingRoomIcon />
            </Avatar>

            <Box ml={1}>
              <Typography variant="subtitle1" component="div">
                {roomDetails[activeRoom].room[0].roomName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {roomDetails[activeRoom].group[0].groupName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {roomDetails[activeRoom].hotel[0].hotelName} -{" "}
                {roomDetails[activeRoom].room[0].roomType}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {roomDetails[activeRoom].room[0].travelStartDate} -{" "}
                {roomDetails[activeRoom].room[0].travelEndDate}
              </Typography>
            </Box>

            <IconButton sx={{ ml: "auto" }} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </CardContent>
          <CardMedia
            component="img"
            height="194"
            image={roomDetails[activeRoom].hotel[0].hotelImage}
            alt={roomDetails[activeRoom].hotel[0].hotelName}
          />
          <CardContent>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
              {roomDetails[activeRoom].room[0].roomStatus === "Active" ? (
                <Chip
                  label="Booked"
                  variant="outlined"
                  size="small"
                  color="primary"
                  icon={<CheckIcon />}
                />
              ) : (
                ""
              )}

              <Chip
                label="Balance Due - $1,234"
                color="warning"
                variant="outlined"
                size="small"
                icon={<AttachMoneyIcon />}
              />
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {roomDetails[activeRoom].hotel[0].hotelDescription}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="Modify"
              color="primary"
              sx={{ fontSize: 16 }}
            >
              <EditLocationAltIcon />
              Modify
            </IconButton>
            <IconButton
              aria-label="Make Payment"
              color="primary"
              sx={{ fontSize: 16 }}
            >
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
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                  <Chip
                    icon={<PersonIcon />}
                    label="Adult 2"
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                  <Chip
                    icon={<ChildCareIcon />}
                    label="Child 1"
                    color="warning"
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
                    color="info"
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
      ) : (
        "No Data"
      )}
    </React.Fragment>
  );
};

export default RoomCard;
