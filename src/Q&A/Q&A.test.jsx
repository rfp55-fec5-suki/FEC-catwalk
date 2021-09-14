import React from 'react';
import { render, screen } from '@testing-library/react';

import QAList from './QAList.jsx';

describe('QAList', () => {
  test('renders App component', () => {
    render(<QAList />);
  });
});

