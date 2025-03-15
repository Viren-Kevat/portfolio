import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  Home,
  Person,
  Code,
  Work,
  Email,
  Terminal,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const navItems = [
    { id: "home", label: "Home", icon: <Home /> },
    { id: "hero", label: "Profile", icon: <Person /> },
    { id: "about", label: "About", icon: <Code /> },
    { id: "skills", label: "Skills", icon: <Terminal /> },
    { id: "projects", label: "Projects", icon: <Work /> },
    { id: "contact", label: "Contact", icon: <Email /> },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector("header")?.offsetHeight || 80;
      const offset = section.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
      section.focus({ preventScroll: true });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          top: 0,
          zIndex: 1300,
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px -8px rgba(0,0,0,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: 3 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 700,
              background: "linear-gradient(45deg, #6366f1 0%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Viren.dev
          </Typography>

          {isMobile ? (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "#4b5563" }}
              aria-label="Open navigation menu"
            >
              <Menu />
            </IconButton>
          ) : (
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  startIcon={item.icon}
                  sx={{
                    color: "#4b5563",
                    textTransform: "none",
                    fontSize: "1rem",
                    "&:hover": {
                      color: "#6366f1",
                      background: "rgba(99, 102, 241, 0.05)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <IconButton
                href="https://linkedin.com/in/viren-kevat"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#4b5563", "&:hover": { color: "#0a66c2" } }}
                aria-label="LinkedIn profile"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://github.com/Viren-Kevat"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#4b5563", "&:hover": { color: "#333" } }}
                aria-label="GitHub profile"
              >
                <GitHub />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(16px)",
          },
        }}
        ModalProps={{
          disablePortal: true,
          keepMounted: true,
          BackdropProps: {
            invisible: true,
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              sx={{
                "&:hover": { background: "rgba(99, 102, 241, 0.05)" },
              }}
              button
            >
              <ListItemIcon sx={{ color: "#4b5563" }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
