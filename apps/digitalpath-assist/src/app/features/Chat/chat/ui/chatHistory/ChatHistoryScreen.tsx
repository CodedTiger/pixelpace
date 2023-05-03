import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import {
  Button,
  Divider,
  List,
  Switch,
  Text,
  TextInput,
} from 'react-native-paper';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ChatHistoryScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require('../../../../../assets/images/backgrounds/star-mask.png')}
      resizeMode="repeat"
      style={{ flex: 1, marginTop: -1 }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 0.075, padding: 16 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
            }}
          >
            <Text variant="titleMedium" style={{ color: 'white' }}>
              ChatHistoryScreen
            </Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: 0 }}>
            <Image
              source={require('../../../../../assets/images/app-logo.png')}
              style={{ width: 80, height: 80 }}
            />
          </View>
        </View>
      </SafeAreaView>
      <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
        <View style={{ flex: 1, marginTop: 0 }}>
          <List.Item
            title="Serumula"
            description="Hi there, my issue started when magic was destroyed. Hi there, my issue started when magic was destroyedHi there, my issue started when magic was destroyed"
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => navigation.navigate('UserDetail')}
          />
          <Divider />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ChatHistoryScreen;

const styles = StyleSheet.create({});
