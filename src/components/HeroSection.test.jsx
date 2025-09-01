import { render, screen } from '@testing-library/react';
import { HeroSection } from './HeroSection';

test('renders the form with all fields and the submit button', () => {
  render(<HeroSection />);
  
  // Check for the form fields
  expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
  expect(screen.getByLabelText('Tell us about your project...')).toBeInTheDocument();
  
  // Check for the submit button
  expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
});