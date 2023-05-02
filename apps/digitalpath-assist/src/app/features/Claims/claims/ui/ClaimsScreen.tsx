import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Button, Divider, List, Text, TextInput } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ClaimsScreen = ({ navigation }) => {
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
              Claims
            </Text>
          </View>
          <View style={{ padding: 16 }}>
            <Text variant="headlineMedium" style={{ color: 'white' }}>
              Submit your claim with absolute ease.
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
          <View style={{ flex: 1, marginTop: 0 }}>
            <List.Item
              title="Self-service claims portal"
              description={null}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => navigation.navigate('AboutUs')}
            />
            <Divider />
            <List.Item
              title="New fastrack claim"
              description={null}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => navigation.navigate('ProductInfo')}
            />
            <Divider />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ClaimsScreen;

const styles = StyleSheet.create({});
