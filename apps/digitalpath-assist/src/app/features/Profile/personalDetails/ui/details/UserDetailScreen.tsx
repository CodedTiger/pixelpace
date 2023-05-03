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

const UserDetailScreen = ({ navigation }) => {
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
              User Details
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
              Thabo Ndebele
            </Text>
          </View>
          <Divider />
          <List.Item
            title=" Residential address"
            description=" 316 Lourie street waterfall view estate midrand"
          />
          <Divider />
          <List.Item
            title=" Email address"
            description="hello@arkpixelstudio.co.za"
          />
          <Divider />
          <List.Item title=" Gender" description="Female" />
          <Divider />
          <List.Item title="ID number" description="89*************" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({});
