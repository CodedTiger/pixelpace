import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Button, Divider, List, Text, TextInput } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MoreScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require('../../../../assets/images/backgrounds/star-mask.png')}
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
              More
            </Text>
          </View>
          <View style={{ padding: 16 }}>
            <Text variant="headlineMedium" style={{ color: 'white' }}>
              All you need to know about your app.
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
          <View style={{ flex: 1, marginTop: 0 }}>
            <List.Item
              title="About us"
              description={null}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => navigation.navigate('AboutUs')}
            />
            <Divider />
            <List.Item
              title="Product info & terms"
              description={null}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => navigation.navigate('ProductInfo')}
            />
            <Divider />
            <List.Item
              title="Settings"
              description={null}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => navigation.navigate('Settings')}
            />
            <Divider />
          </View>
          <View style={{ flex: 0.1, marginTop: 0, padding: 16 }}>
            <Button
              icon="power"
              mode="contained"
              onPress={() => console.log('Pressed')}
              style={{ backgroundColor: '#25326e' }}
            >
              Logout
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({});
