import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import {
  Avatar,
  Button,
  Divider,
  FAB,
  List,
  Text,
  TextInput,
} from 'react-native-paper';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require('../../../../../assets/images/backgrounds/home-visual.png')}
      resizeMode="repeat"
      style={{ flex: 1, marginTop: -1 }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
            }}
          >
            <Text variant="titleMedium" style={{ color: 'white' }}>
              Home
            </Text>
          </View>
          <View
            style={{
              padding: 16,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text variant="headlineMedium" style={{ color: 'white' }}>
              Welcome Justice
            </Text>
          </View>

          <View
            style={{
              padding: 16,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              variant="titleMedium"
              style={{ color: 'white', textAlign: 'center', fontWeight: '300' }}
            >
              Your assistant app to help you and your loved ones in any
              emergency
            </Text>
          </View>
        </View>

        <View style={{ flex: 0.8, marginTop: 0, backgroundColor: 'white' }}>
          <TouchableOpacity
            style={{ alignItems: 'center', marginTop: -130 }}
            onPress={() => navigation.navigate('Emergency')}
          >
            <Avatar.Image
              style={{ backgroundColor: 'transparent' }}
              size={250}
              source={require('../../../../../assets/images/assist-button.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
