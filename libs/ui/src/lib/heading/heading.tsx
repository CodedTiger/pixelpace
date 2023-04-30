import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface HeadingProps {}

export function Heading(props: HeadingProps) {
  return (
    <View>
      <Text>Welcome to heading!</Text>
    </View>
  );
}

export default Heading;
