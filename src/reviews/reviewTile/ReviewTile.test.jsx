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
  test('there should be a recommended element if the reiewer recommends the product', () => {
    const {getByTestId} = render(<ReviewTile review={testReview}/>);
    expect(getByTestId('reviewTileRecommend')).toBeInTheDocument();
  })
  test('there should not be a recommended element if the reviewer does not recommend the product', () => {
    testReview.recommend = false;
    const {queryByTestId} = render(<ReviewTile review={testReview}/>);
    expect(queryByTestId('reviewTileRecommend')).toBeNull();
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
  test('the number next to helpful should be how many people found that review helpful', () => {
    testReview.helpfulness = 4;
    const {getByText} = render(<ReviewTile review={testReview}/>);
    expect(getByText('Helpful? Yes(4)')).toBeInTheDocument();
  })
  test('if the review summary is longer than the 65 characters only the first 60 will appear with an elipsis added to the end in the review summary element the rest will appear in a summary cont element', () => {
    var summary = 'this is a very long summary this summary needs to be over 65 '
    var summaryCont = 'this part of the long summary should be displayed in the summaryCont element'
    testReview.summary= summary + summaryCont;
    const {getByText} = render(<ReviewTile review={testReview}/>);
    expect(getByText(summary + '...')).toBeInTheDocument();
    expect(getByText(summaryCont)).toBeInTheDocument();
  })
})