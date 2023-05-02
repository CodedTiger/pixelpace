import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Button, Divider, List, Text, TextInput } from 'react-native-paper';
import { StatusBar } from 'react-native';

const HelpScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <View style={{ flex: 0.5, backgroundColor: '#000c42' }}>
          <ImageBackground
            source={require('../../../../assets/images/backgrounds/star-mask.png')}
            resizeMode="cover"
            style={{ flex: 1 }}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 16,
              }}
            >
              <Text variant="titleMedium" style={{ color: 'white' }}>
                About
              </Text>
            </View>
            <View style={{ padding: 16 }}>
              <Text variant="headlineMedium" style={{ color: 'white' }}>
                All you need to know about your app.
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ flex: 1, marginTop: 0 }}>
          <List.Item
            title="About us"
            description={null}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="Product info & terms"
            description={null}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="Help"
            description={null}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="Settings"
            description={null}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
        </View>
      </SafeAreaView>
    </>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({});
