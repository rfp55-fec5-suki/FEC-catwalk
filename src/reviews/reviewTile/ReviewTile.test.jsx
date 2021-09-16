import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReviewTile from './ReviewTile.jsx'
var testReview = {
  "review_id": 840820,
  "rating": 5,
  "summary": "this is the summary text",
  "recommend": true,
  "response": null,
  "body": "this is the body text",
  "date": "2021-09-14T00:00:00.000Z",
  "reviewer_name": "user",
  "helpfulness": 2,
  "photos": []
}
describe('ReviewTile', () => {
  test('renders proper text elements in ReviewTile component', () => {
    const {getByText} = render(<ReviewTile review={testReview}/>);
    expect(getByText('Helpful? Yes(2)')).toBeInTheDocument();
    expect(getByText('this is the summary text')).toBeInTheDocument();
    expect(getByText('this is the body text')).toBeInTheDocument();
    expect(getByText('user | September 13, 2021')).toBeInTheDocument();
    expect(getByText('I recommend this product')).toBeInTheDocument();
  })
  test('response should not render if value is null', () => {
    const {queryByTestId} = render(<ReviewTile review={testReview}/>);
    expect(queryByTestId('reviewTileResponse')).toBeNull();
  })
  test('response should render if the value is not null', () => {
    testReview.response = ('this is a response to the review')
    const {getByTestId} = render(<ReviewTile review={testReview}/>);
    expect(getByTestId('reviewTileResponse')).toBeInTheDocument();
  })
  test('there should be a star rating element', () => {
    const {getByTestId} = render(<ReviewTile review={testReview}/>);
    expect(getByTestId('starRating')).toBeInTheDocument();
  })
})