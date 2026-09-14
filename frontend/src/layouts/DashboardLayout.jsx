import React from "react";
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HotelIcon from "@mui/icons-material/Hotel";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { Link as RouterLink } from "react-router-dom";

const DRAWER_WIDTH = 220;

const navItems = [
  { label: "Dashboard", to: "/dashboard", icon: <DashboardIcon /> },
  { label: "Beds", to: "/dashboard", icon: <HotelIcon /> },
  { label: "Caretakers", to: "/dashboard", icon: <PeopleIcon /> },
  { label: "Appointments", to: "/dashboard", icon: <EventIcon /> },
  { label: "Emergency", to: "/dashboard", icon: <LocalHospitalIcon /> },
];

/**
 * DashboardLayout — navbar + sidebar shell for authenticated/app pages.
 *
 * ┌───────────────────────────────┐
 * │            Navbar             │
 * ├───────────┬───────────────────┤
 * │  Sidebar  │    Page Content   │
 * └───────────┴───────────────────┘
 */
function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ color: "inherit", textDecoration: "none" }}
          >
            Medtachy
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component={RouterLink} to={item.to}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Page content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default DashboardLayout;
