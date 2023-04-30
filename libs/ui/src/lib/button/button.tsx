import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export interface ButtonProps {}

export const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      icon="camera"
      mode="contained"
      onPress={() => console.log('Pressed')}
    >
      Press me
    </Button>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 5, paddingBottom: 10 },
  text: { fontSize: 24, fontWeight: '500', color: '#45bc98' },
});

export default CustomButton;
