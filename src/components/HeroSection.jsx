import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { StyledTextField } from "./StyledTextField";

export const HeroSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formState.name,
      email: formState.email,
      details: formState.details
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you! Your message has been sent.');
        setFormState({ name: '', email: '', details: '' }); 
        setIsSubmitting(false);
      }, (error) => {
        console.log('FAILED...', error);
        alert('Oops! Something went wrong. Please try again later.');
        setIsSubmitting(false);
      });
  };

  return (
    <Box id="contact" sx={{ width: "100%", py: { xs: 8, md: 12 }, display: 'flex', justifyContent: 'center', px: 2 }}>
      <Stack spacing={3} sx={{ maxWidth: '1104px', width: '100%' }}>
        <Box>
          <Typography variant="h4" component="h2" sx={{ color: "text.primary", mb: 1, fontSize: { xs: "1.8rem", md: "2.125rem" }}}>
            Begin a Project
          </Typography>
          <Box sx={{ width: 80, height: 2, backgroundColor: "secondary.main" }}/>
        </Box>
        <Typography variant="body1" sx={{ color: "text.primary", fontSize: { xs: "1rem", md: "1.125rem" }, lineHeight: 1.8 }}>
          If you have a vision for your space, we would be delighted to help you bring it to life. Reach out
          <br />
          to start a conversation with our design team.
        </Typography>

        <Stack component="form" spacing={4} sx={{ mt: 4 }} onSubmit={handleSubmit}>
          <StyledTextField
            id="name"
            name="name" 
            label="Full Name"
            value={formState.name}
            onChange={handleChange}
          />
          <StyledTextField
            id="email"
            name="email" 
            label="Email Address"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <StyledTextField
            id="details"
            name="details" 
            label="Tell us about your project..."
            multiline
            rows={4}
            value={formState.details}
            onChange={handleChange}
          />
          <Button
            variant="outlined"
            type="submit"
            disabled={isSubmitting}
            sx={{
              width: { xs: '100%', sm: 212 },
              height: 58,
              borderColor: "text.primary",
              color: "text.primary",
              "&:hover": { borderColor: "text.primary", backgroundColor: "action.hover" },
              alignSelf: { xs: 'center', sm: 'flex-start' },
            }}
          >
            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};


