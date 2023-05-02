import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const AccountResetScreen = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flex: 3 }}>
        <View style={{ alignItems: 'center', marginTop: 16 }}>
          <Image
            source={require('../../../../assets/images/app-logo.png')}
            style={{ width: 170, height: 170 }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            padding: 16,
          }}
        >
          <Text variant="headlineSmall">Activate your account</Text>
          <Text variant="bodyMedium">
            Enter your cell number, create a password and enter the activation
            code to activatter your account.
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
        </View>
        <View style={{ padding: 16 }}>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            Activate account
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
          <Text variant="bodyMedium">Cancel</Text>
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

export default AccountResetScreen;

const styles = StyleSheet.create({});
