import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })
// import { render, mount, shallow } from 'enzyme';
// import App from './../App.js';
import RatingsReviews from './RatingsReviews.jsx';

describe('ratings and review widget', () => {
  test('the widget should exist', () => {
    const wrapper = Enzyme.mount(<RatingsReviews />);
    expect(wrapper.exists('.rr-main')).toEqual(true);
  })
})