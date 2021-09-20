import React from 'react';
import { render, screen } from '@testing-library/react';

import QAList from './QAList.jsx';
import QAAnswer from './QAAnswer.jsx'

describe.skip('QAList', () => {
  test('renders App component', () => {
    render(<QAList />);

    screen.debug();
  });
});

describe.skip('QAList', () => {
  test('renders App component', () => {
    render(<QAAnswer />);
  });
});
