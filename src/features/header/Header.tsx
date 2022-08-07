import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function Header() {
  const [drawerStatus, setDrawerStatus] = React.useState(false);
  // Menu Items
  const menuItems = [
    {
      heading: "Trip Mangement",
      menuItems: [
        {
          title: "My Trips",
          desc: "View and manage your travel",
          link: "",
        },
        {
          title: "Manage Transfers",
          desc: "Book or modify transportation",
          link: "",
        },
        {
          title: "Make a Payment",
          desc: "Pay and view payment history",
          link: "",
        },
        {
          title: "Modify my Reservation",
          desc: "Make changes and see pricing",
          link: "",
        },
        {
          title: "Cancel My Reservation",
          desc: "Review policies and cancel",
          link: "",
        },
      ],
    },
    {
      heading: "Account Management",
      menuItems: [
        {
          title: "My Profile",
          desc: "View and edit your account info",
          link: "",
        },
        {
          title: "Guests",
          desc: "View and invite to dashboard",
          link: "",
        },
      ],
    },
    {
      heading: "Support Center",
      menuItems: [
        {
          title: "FAQs",
          desc: "View frequently asked questions",
          link: "",
        },
        {
          title: "Contact Guest Services",
          desc: "We're here for you! Send a message",
          link: "",
        },
      ],
    },
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerStatus(open);
    };

  const theme = useTheme();
  const mobileResponsive: boolean = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={toggleDrawer(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Room Dashboard
            </Typography>
            <Avatar
              sx={{
                width: 28,
                height: 28,
                fontSize: 14,
                bgcolor: theme.palette.secondary.light,
              }}
            >
              AN
            </Avatar>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={drawerStatus} onClose={toggleDrawer(false)}>
        <Box
          width={mobileResponsive ? "auto" : "100vw"}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box p={1} sx={{ backgroundColor: theme.palette.primary.main }}>
            <List sx={{ color: "#fff" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: theme.palette.primary.light }}>
                    AN
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Typography variant="subtitle1" component="div">
                      Account Name
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2">account@email.com</Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
          <List>
            {menuItems.map((menuSection, index) => (
              <div key={index}>
                <ListItemButton>
                  <ListItemText secondary={menuSection.heading} />
                </ListItemButton>
                {menuSection.menuItems.map((menuItem, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton>
                      <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText
                        primary={menuItem.title}
                        secondary={menuItem.desc}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
                <Divider />
              </div>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
