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

const EmergencyScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: '#303b54' }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 0.8, padding: 16 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
            }}
          >
            <Text variant="titleMedium" style={{ color: 'white' }}>
              Emergency
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
              Please wait while we submit your request
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, marginTop: 0 }}>
          <TouchableOpacity
            style={{ alignItems: 'center', marginTop: -50 }}
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
    </View>
  );
};

export default EmergencyScreen;

const styles = StyleSheet.create({});
