import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const DashboardScreen = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flex: 3 }}>
        <View style={{ alignItems: 'center', marginTop: 16 }}>
          <Image
            source={require('../../../../assets/images/app-logo.png')}
            style={{ width: 170, height: 170 }}
          />
        </View>
        <View style={{ alignItems: 'center', padding: 16 }}>
          <Text variant="headlineSmall">DashboardScreen</Text>
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
          marginBottom: 16,
        }}
      >
        <View style={{ marginVertical: 16 }}>
          <Text variant="bodyMedium">Dont have an account ? Activate</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text variant="bodySmall">
            An Authorised Financial Service Provider
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
