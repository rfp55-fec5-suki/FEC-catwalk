import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductCard from './productcard.jsx';

describe.skip('ProductCard', () => {
  test('render Product Card component', () => {
    render(<ProductCard />);
  });
});

describe.skip('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });

  test('false is falsy', () => {
    expect(false).toBe(false);
  });
});