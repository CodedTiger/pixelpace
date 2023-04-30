import React from 'react';
import { render } from '@testing-library/react-native';

import Heading from './heading';

describe('Heading', () => {
  it('should render successfully', () => {
    const { root } = render(<Heading />);
    expect(root).toBeTruthy();
  });
});
