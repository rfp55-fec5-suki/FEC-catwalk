import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedProductCard from './relatedproductcard.jsx';


describe('RelatedProductCard', () => {
  test('renders Related Product Card component', () => {
    render(<RelatedProductCard />);

    screen.debug();
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

// make a test to see if the product id matches the clicked product

// make a test to see if modal is rendered when clicked on button