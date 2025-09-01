import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import heroBackground from "../assets/hero-background.jpg";

export const MainSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.3)",
          zIndex: 1,
        }}
      />

      <Stack
        spacing={4}
        alignItems="center"
        sx={{
          maxWidth: "743px",
          textAlign: "center",
          px: { xs: 2, sm: 4 },
          zIndex: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
            color: "#f8f7f2",
            fontSize: { xs: "3.5rem", sm: "5rem", md: "6rem" },
            letterSpacing: "0.70px",
            lineHeight: 1.1,
          }}
        >
          DAMAS
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#f8f7f2",
            fontSize: { xs: "1rem", md: "1.125rem" },
            lineHeight: 1.8,
            maxWidth: "662px",
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          Damas LLC designs and builds interiors that merge timeless elegance
          with modern comfort, creating spaces that are not just lived in, but
          experienced.
        </Typography>

        <Button
          variant="outlined"
          component="a"
          href="#about"
          sx={{
            color: "white",
            borderColor: "white",
            padding: "17px 41px",
            fontSize: "0.875rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontFamily: "'Manrope', sans-serif",
            "&:hover": {
              borderColor: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          DISCOVER OUR PHILOSOPHY
        </Button>
      </Stack>
    </Box>
  );
};
