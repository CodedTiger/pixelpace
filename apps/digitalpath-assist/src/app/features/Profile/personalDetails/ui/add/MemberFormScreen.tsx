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

const MemberFormScreen = ({ navigation }) => {
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
              Add family member
            </Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Text>This is where the form will be</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MemberFormScreen;

const styles = StyleSheet.create({});
