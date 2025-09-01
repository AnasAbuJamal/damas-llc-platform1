import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navigationItems = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

export const NavigationSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLinkClick = (event, href) => {
    event.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setDrawerOpen(false); 
  };

  const drawer = (
    <Box
      sx={{ width: 250, backgroundColor: "#2e2e2e", height: "100%" }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  color: "#fcfbf8",
                  "& .MuiTypography-root": {
                    fontWeight: 500,
                    letterSpacing: "0.70px",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          height: 96,
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Playfair Display', serif",
              color: "#f8f7f2",
              fontSize: "1.75rem",
              fontWeight: "bold",
            }}
          >
            DAMAS
          </Typography>

          <Stack
            direction="row"
            spacing={5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navigationItems.map((item) => (
              <Typography
                key={item.label}
                component="a"
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                variant="body2"
                sx={{
                  fontFamily: "Manrope, Helvetica",
                  fontWeight: 500,
                  color: "#fcfbf8",
                  fontSize: "14px",
                  letterSpacing: "0.70px",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Stack>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            aria-haspopup="true"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "flex", md: "none" }, color: "#fcfbf8" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
};