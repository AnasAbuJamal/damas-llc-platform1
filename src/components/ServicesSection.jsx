import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import servicesSofa from '../assets/services-sofa.jpg';

export const ServicesSection = () => {
  return (
    <Box id ="services" sx={{ width: "100%", py: { xs: 6, md: 12 }, display: 'flex', justifyContent: 'center' }}>
      <Grid container sx={{ maxWidth: 1104, width: '100%', px: 2, alignItems: 'center' }}>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={servicesSofa}
            alt="A modern, dark green sofa against a plain wall."
            sx={{ 
              width: '100%', 
              display: 'block',
              maxWidth: { xs: '100%', md: 470 },
              aspectRatio: {sx:'3 / 3 ', md: '3 / 2.5'}
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
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
                Tailored Solutions
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
              We provide comprehensive interior construction services for residential and commercial spaces. From initial concept to final execution, our work is tailored to the unique vision and needs of each client, executed with meticulous care.
            </Typography>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};