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
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

interface Props {
  roomDetails: any;
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

const RoomCard: React.FC<Props> = ({ roomDetails }) => {
  // Card Section
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      {roomDetails.roomInfo?.map((room: any, index: number) => (
        <Card key={index}>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ bgcolor: blue[600] }} aria-label="recipe">
              <MeetingRoomIcon />
            </Avatar>

            <Box ml={1}>
              <Typography variant="subtitle1" component="div">
                {room.room[0].roomName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {room.group[0].groupName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {room.hotel[0].hotelName} - {room.room[0].roomType}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {room.room[0].travelStartDate} - {room.room[0].travelEndDate}
              </Typography>
            </Box>

            <IconButton sx={{ ml: "auto" }} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </CardContent>
          <CardMedia
            component="img"
            height="194"
            image={room.hotel[0].hotelImage}
            alt={room.hotel[0].hotelName}
          />
          <CardContent>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
              {room.room[0].roomStatus === "Active" ? (
                <Chip
                  icon={<CheckIcon />}
                  label="Booked"
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              ) : (
                ""
              )}

              <Chip
                icon={<AttachMoneyIcon />}
                label="Balance Due - $1,234"
                color="success"
                variant="outlined"
                size="small"
              />
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {room.hotel[0].hotelDescription}
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
      ))}
    </React.Fragment>
  );
};

export default RoomCard;
