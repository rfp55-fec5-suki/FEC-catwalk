import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StarRating from './StarRating.jsx'

describe.skip('Star rating', () => {
  test('it should have the proper amount of full stars based on rating', () => {
    var {queryAllByTestId, unmount} = render(<StarRating rating={0} />);
    expect(queryAllByTestId('empty').length).toBe(5);
    expect(queryAllByTestId('full').length).toBe(0);
    unmount();
    var {queryAllByTestId, unmount} = render(<StarRating rating={1} />);
    expect(queryAllByTestId('empty').length).toBe(4);
    expect(queryAllByTestId('full').length).toBe(1);
    unmount();
    var {queryAllByTestId, unmount} = render(<StarRating rating={2} />);
    expect(queryAllByTestId('empty').length).toBe(3);
    expect(queryAllByTestId('full').length).toBe(2);
    unmount();
    var {queryAllByTestId, unmount} = render(<StarRating rating={3} />);
    expect(queryAllByTestId('empty').length).toBe(2);
    expect(queryAllByTestId('full').length).toBe(3);
    unmount();
    var {queryAllByTestId, unmount} = render(<StarRating rating={4} />);
    expect(queryAllByTestId('empty').length).toBe(1);
    expect(queryAllByTestId('full').length).toBe(4);
    unmount();
    var {queryAllByTestId, unmount} = render(<StarRating rating={5} />);
    expect(queryAllByTestId('empty').length).toBe(0);
    expect(queryAllByTestId('full').length).toBe(5);
    unmount();
  })
  test('it should be be able show values aproximated to a quarter of a star', () => {
    var {queryAllByTestId, unmount} = render(<StarRating rating={.3} />);
    expect(queryAllByTestId('quarter').length).toBe(1);
    unmount();
    var {queryAllByTestId, unmount} = render(<StarRating rating={.62} />);
    expect(queryAllByTestId('half').length).toBe(1);
    unmount();
    var {queryAllByTestId, unmount} = render(<StarRating rating={.89} />);
  expect(queryAllByTestId('threeQuarter').length).toBe(1);
    unmount();
  })
  test('it should be able to take in an object value and render the average rating', () => {
    var meta = {
      5: 25,
      4: 15,
      2: 1
    };
    var {queryAllByTestId, unmount} = render(<StarRating meta={meta} />);
    expect(queryAllByTestId('full').length).toBe(4);
    expect(queryAllByTestId('half').length).toBe(1);
  })
})