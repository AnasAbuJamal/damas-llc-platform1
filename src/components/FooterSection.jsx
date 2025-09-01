import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

const navigationLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

export const FooterSection = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        borderTop: 1,
        borderColor: "rgba(46, 46, 46, 0.2)",
        py: 4,
        px: 2,
        backgroundColor: 'var(--colors-brand-bg)'
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }} sx={{ mt: 2 }}>
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              underline="none"
              sx={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 500,
                fontSize: "0.875rem",
                color: "text.primary",
                letterSpacing: "0.05em",
                lineHeight: "20px",
                cursor: "pointer",
                textAlign: 'center',
                transition: 'opacity 0.3s ease',
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>

        <Typography
          sx={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: "0.875rem",
            color: "rgba(46, 46, 46, 0.7)",
            textAlign: "center",
            lineHeight: "20px",
            mt: 2,
          }}
        >
          © {new Date().getFullYear()} Damas LLC. All Rights Reserved. Crafted with Precision.
        </Typography>
      </Stack>
    </Box>
  );
};