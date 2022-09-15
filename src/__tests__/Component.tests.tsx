import { render, screen } from '@testing-library/react';

import { Test } from '../Component';

test('Renders main page correctly', () => {
  render(<Test />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
