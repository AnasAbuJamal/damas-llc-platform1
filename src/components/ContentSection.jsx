import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import galleryBathroom from '../assets/gallery-bathroom.jpg';
import galleryKitchen from '../assets/gallery-kitchen.jpg';
import aboutInterior from '../assets/about-interior.jpg'; 

const projectImages = [
  { id: 1, image: galleryKitchen, alt: "Modern white kitchen" },
  { id: 2, image: galleryBathroom, alt: "Luxurious modern bathroom" },
  { id: 3, image: aboutInterior, alt: "Living room interior" },
];

export const ContentSection = () => {
  return (
    <Box id="gallery" sx={{ width: "100%", py: 25 }}>
      <Stack spacing={6} alignItems="center" sx={{ px: 2 }}>
        <Stack spacing={2} alignItems="center" sx={{ maxWidth: 672, textAlign: 'center' }}>
          <Stack spacing={2} alignItems="center">
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 600,
                color: "text.primary",
                lineHeight: 1.2,
              }}
            >
              Our Work
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 2,
                backgroundColor: "secondary.main",
              }}
            />
          </Stack>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "text.primary",
              lineHeight: 2,
              maxWidth: 659,
              mt: 10,
            }}
          >
            A glimpse into the spaces we have transformed. Each project
            showcases our dedication to detail and our passion for creating
            exceptional interiors that stand the test of time.
          </Typography>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          {projectImages.map((project) => (
            <Box
              key={project.id}
              sx={{
                width: { xs: 400, sm: 350, md: 405 }, // set a minimum width for xs
                height: { xs: 300, sm: 350, md: 405 },
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: "scale(1.008)",
                },
              }}
              role="img"
              aria-label={project.alt}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};