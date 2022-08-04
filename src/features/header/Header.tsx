import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// type Anchor = 'top' | 'left' | 'bottom' | 'right';

export function Header() {
    const [drawerStatus, setDrawerStatus] = React.useState(false);
    const menuItems = [
        {
            heading: "Trip Mangement",
            menuItems: [
                {
                    title: "My Trips",
                    desc: "View and manage your travel",
                    icon: "WorkOutlineOutlinedIcon",
                    link: "" 
                },
                {
                    title: "Manage Transfers",
                    desc: "Book or modify transportation",
                    icon: "WorkOutlineOutlinedIcon",
                    link: "" 
                },
                {
                    title: "Make a Payment",
                    desc: "Pay and view payment history",
                    icon: "WorkOutlineOutlinedIcon",
                    link: "" 
                },
                {
                    title: "Cancel My Reservation",
                    desc: "Review policies and cancel",
                    icon: "WorkOutlineOutlinedIcon",
                    link: "" 
                },
            ]
        },
        {
            heading: "Account Management",
            menuItems: [
                {
                    title: "My Profile",
                    desc: "View and edit your account info",
                    icon: "AccountBalanceOutlinedIcon ",
                    link: "" 
                },
                {
                    title: "Guests",
                    desc: "View and invite to dashboard",
                    icon: "AccountBalanceOutlinedIcon ",
                    link: "" 
                },
            ]
        },
    ]

    console.log(menuItems.map((item) => item.menuItems))
    
      const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
    
          setDrawerStatus(open);
        };


  return (
    <div>
        
          <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
          <Drawer
            open={drawerStatus}
            onClose={toggleDrawer(false)}
          >
            <Box
                sx={{ width: 'auto' }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                >
                <List>
                    {menuItems.map((menuSection, index) => (
                        <div key={index}>
                            <ListItemButton>
                                <ListItemText secondary={menuSection.heading} />
                            </ListItemButton>
                            {menuSection.menuItems.map((menuItem, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={menuItem.title} secondary={menuItem.desc} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <Divider />
                        </div>
                    ))}
                </List>
            </Box>
          </Drawer>
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/rooms">Room</Link>
    </div>
  );
}
