import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../pages/dashboard';

test('Dashboard', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText("Dashboard");
  expect(linkElement).toBeInTheDocument();
});
