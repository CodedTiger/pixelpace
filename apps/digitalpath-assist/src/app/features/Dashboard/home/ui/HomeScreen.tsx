import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { StatusBar } from 'react-native';

const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: 'center', backgroundColor: 'red' }}
      >
        <View>
          <Text>Home Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
