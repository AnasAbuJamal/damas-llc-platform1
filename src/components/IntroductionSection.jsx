import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import aboutInterior from '../assets/about-interior.jpg';

export const IntroductionSection = () => {
  return (
    <Box id='about' sx={{ width: "100%", py: { xs: 18, md: 6 }, display: 'flex', justifyContent: 'center' }}>
      <Grid container sx={{ maxWidth: 1104, width: '100%', px: 2, alignItems: 'center' }}>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={aboutInterior}
            alt="A stylishly decorated room with a plush orange armchair and assorted green plants."
            sx={{ 
              width: '100%', 
              display: 'block',
              maxWidth: { xs: '100%', md: 470 },
              aspectRatio: {xs:'3 / 2.5', md:'3 / 5'},
              objectFit: 'cover',
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ pl: { xs: 0, md: 8 }, pt: { xs: 5, md: 0 }, maxWidth: 470 }}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "2.8rem", md: "3.5rem" },
                  lineHeight: 1.2,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                A Commitment
                <br />
                to Craft
              </Typography>
              <Box
                sx={{
                  width: 80,
                  height: 2,
                  backgroundColor: 'secondary.main',
                }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                lineHeight: 1.9,
                color: 'text.primary',
                fontWeight: 400,
              }}
            >
              At Damas LLC, we believe that true luxury lies in the details.
              We blend traditional craftsmanship with a refined design eye,
              ensuring every project reflects our unwavering commitment
              to quality and sophistication.
            </Typography>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};
