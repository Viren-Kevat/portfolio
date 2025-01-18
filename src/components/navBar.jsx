import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // Control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track scroll position

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavigation = (id) => {
    // Close the drawer after clicking
    setDrawerOpen(false);

    // Scroll to the section with the given ID
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling down, hide navbar, else show it when scrolling up
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Dependency on lastScrollY to track direction

  return (
    <div>
      {/* Conditionally render the AppBar if showNavbar is true */}
      {showNavbar && (
        <AppBar position="fixed" sx={{ backgroundColor: "#1976d209" }}>
          <Toolbar>
            {/* Burger Menu Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically
                textAlign: "center", // Ensure text alignment is centered
              }}
            >
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Drawer for Burger Menu */}
      <Drawer
        anchor="left" // Ensure this is correctly set to
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#ffffff00", // Set a transparent background
            backdropFilter: "blur(10px)", // Apply the blur effect
            WebkitBackdropFilter: "blur(10px)", // For Safari support
            color: "#ffffff",
          },
        }}
      >
        <List sx={{ width: 250 }}>
          <ListItem button onClick={() => handleNavigation("home")}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("hero")}>
            <ListItemText primary="Hero" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("about")}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("skills")}>
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("project")}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("contact")}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
