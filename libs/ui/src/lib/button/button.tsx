import * as React from 'react';
import { Image } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import Svg, { Path } from 'react-native-svg';
export interface ButtonProps {}

export const CustomButton = (props: ButtonProps) => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flex: 3 }}>
        <View style={{ alignItems: 'center', marginTop: 16 }}>
          <Image
            source={require('../../assets/images/app-logo.png')}
            style={{ width: 170, height: 170 }}
          />
        </View>
        <View style={{ alignItems: 'center', padding: 16 }}>
          <Text variant="headlineSmall">Login</Text>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>
        </View>
        <View>
          <View style={{ padding: 16 }}>
            <TextInput
              label="Enter your cell number"
              theme={{ roundness: 25 }}
              mode="outlined"
            />
          </View>
          <View style={{ padding: 16 }}>
            <TextInput
              label="Enter your password"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
              theme={{ roundness: 25 }}
              mode="outlined"
            />
          </View>
          <View
            style={{ alignItems: 'flex-end', padding: 16, marginBottom: 5 }}
          >
            <Text variant="bodyMedium">Forgot Password ?</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            Login
          </Button>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          padding: 16,
          marginBottom: 16,
        }}
      >
        <Text variant="bodyMedium">Dont have an account ? Activate</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 5, paddingBottom: 10 },
  text: { fontSize: 24, fontWeight: '500', color: '#45bc98' },
});

export default CustomButton;
