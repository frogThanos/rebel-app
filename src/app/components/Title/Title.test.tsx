import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title, HeadingLevel } from './index';

describe('Title Component', () => {
  it('renders the correct tag for h1', () => {
    render(<Title text="Heading 1" level={HeadingLevel.H1} />);
    const heading = screen.getByText('Heading 1');
    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveClass('text-4xl', 'font-bold', 'mb-4');
  });

  it('renders the correct tag for h2', () => {
    render(<Title text="Heading 2" level={HeadingLevel.H2} />);
    const heading = screen.getByText('Heading 2');
    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveClass('text-3xl', 'font-semibold', 'mb-3');
  });

  it('renders the correct tag for h3', () => {
    render(<Title text="Heading 3" level={HeadingLevel.H3} />);
    const heading = screen.getByText('Heading 3');
    expect(heading.tagName).toBe('H3');
    expect(heading).toHaveClass('text-2xl', 'font-medium', 'mb-2');
  });

  it('renders the correct tag for h4', () => {
    render(<Title text="Heading 4" level={HeadingLevel.H4} />);
    const heading = screen.getByText('Heading 4');
    expect(heading.tagName).toBe('H4');
    expect(heading).toHaveClass('text-xl', 'mb-2');
  });

  it('renders the correct tag for h5', () => {
    render(<Title text="Heading 5" level={HeadingLevel.H5} />);
    const heading = screen.getByText('Heading 5');
    expect(heading.tagName).toBe('H5');
    expect(heading).toHaveClass('text-lg', 'mb-1');
  });

  it('renders the correct tag for h6', () => {
    render(<Title text="Heading 6" level={HeadingLevel.H6} />);
    const heading = screen.getByText('Heading 6');
    expect(heading.tagName).toBe('H6');
    expect(heading).toHaveClass('text-base', 'mb-1');
  });
});
