import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Button, Divider, List, Text, TextInput } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ChatScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require('../../../../../assets/images/backgrounds/star-mask.png')}
      resizeMode="repeat"
      style={{ flex: 1, marginTop: -1 }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <View style={{ flex: 0.5 }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
            }}
          >
            <Text variant="titleMedium" style={{ color: 'white' }}>
              Chat
            </Text>
          </View>
          <View style={{ padding: 16 }}>
            <Text variant="headlineMedium" style={{ color: 'white' }}>
              Start a chat with a case manager now.
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
          <View style={{ flex: 1, marginTop: 0 }}>
            <List.Item
              title="Live chat"
              description={null}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => navigation.navigate('UserLiveChat')}
            />
            <Divider />
            <List.Item
              title="Chat history"
              description={null}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => navigation.navigate('UserChatHistory')}
            />
            <Divider />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
