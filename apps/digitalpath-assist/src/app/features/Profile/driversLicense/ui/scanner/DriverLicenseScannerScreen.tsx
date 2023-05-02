import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import {
  Avatar,
  Button,
  Divider,
  List,
  Text,
  TextInput,
} from 'react-native-paper';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DriverLicenseScannerScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require('../../../../../assets/images/backgrounds/star-mask.png')}
      resizeMode="repeat"
      style={{ flex: 1, marginTop: -1 }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 0.2, padding: 16 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
            }}
          >
            <Text variant="titleMedium" style={{ color: 'white' }}>
              Scan Drivers license
            </Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
        <View style={{ alignItems: 'center', marginTop: -35 }}>
          <Avatar.Image
            size={60}
            source={require('../../../../../assets/images/app-logo.png')}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', marginVertical: 16 }}>
            <Text variant="titleMedium" style={{ color: 'black' }}>
              VW Poloss
            </Text>
          </View>
          <Divider />
        </View>
      </View>
    </ImageBackground>
  );
};

export default DriverLicenseScannerScreen;

const styles = StyleSheet.create({});
