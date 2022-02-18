import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should be show react label', async () => {
    render(<App />);
    const element = await screen.findByLabelText('React');
    expect(element).toBeInTheDocument();
  });

  it('should have a label', async () => {
    render(<App />);
    waitFor(() => {
      const elementLabel = screen.getByLabelText('arrozinho');
      expect(elementLabel).toBeInTheDocument();
    });
  });
});
