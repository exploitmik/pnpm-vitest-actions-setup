import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Select from './Select';

describe('Select component', () => {
  it('should show select', () => {
    render(<Select />);
    const element = screen.getByText(/select/i);
    expect(element).toBeInTheDocument();
  });
});
