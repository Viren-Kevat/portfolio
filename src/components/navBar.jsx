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

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // Control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track scroll position

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
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
        anchor="left"
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
          <ListItem button>
            <a
              href="#home"
              onClick={() => setDrawerOpen(false)}
              style={{ textDecoration: "none", color: "#ffffff" }} // Use style here
            >
              <ListItemText primary="Home" />
            </a>
          </ListItem>
          <ListItem button>
            <a
              href="#hero"
              onClick={() => setDrawerOpen(false)}
              style={{ textDecoration: "none", color: "#ffffff" }} // Use style here
            >
              <ListItemText primary="Hero" />
            </a>
          </ListItem>
          <ListItem button>
            <a
              href="#about"
              onClick={() => setDrawerOpen(false)}
              style={{ textDecoration: "none", color: "#ffffff" }} // Use style here
            >
              <ListItemText primary="About" />
            </a>
          </ListItem>
          <ListItem button>
            <a
              href="#skills"
              onClick={() => setDrawerOpen(false)}
              style={{ textDecoration: "none", color: "#ffffff" }} // Use style here
            >
              <ListItemText primary="Skills" />
            </a>
          </ListItem>
          <ListItem button>
            <a
              href="#projects"
              onClick={() => setDrawerOpen(false)}
              style={{ textDecoration: "none", color: "#ffffff" }} // Use style here
            >
              <ListItemText primary="Projects" />
            </a>
          </ListItem>
          <ListItem button>
            <a
              href="#contact"
              onClick={() => setDrawerOpen(false)}
              style={{ textDecoration: "none", color: "#ffffff" }} // Use style here
            >
              <ListItemText primary="Contact" />
            </a>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
