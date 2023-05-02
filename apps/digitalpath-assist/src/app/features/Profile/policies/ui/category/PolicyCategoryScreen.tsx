import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Button, Divider, List, Text, TextInput } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PolicyCategoryScreen = ({ navigation }) => {
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
              My Policies
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
        <View style={{ flex: 1, marginTop: 0 }}>
          <List.Item
            title="Household contents"
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            left={(props) => <List.Icon {...props} icon="car-outline" />} // card-account-details-outline
            onPress={() => navigation.navigate('PolicyDetail')}
          />
          <Divider />
          <List.Item
            title="Motor"
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            left={(props) => <List.Icon {...props} icon="car-outline" />}
            onPress={() => navigation.navigate('PolicyDetail')}
          />
          <Divider />
        </View>
      </View>
    </ImageBackground>
  );
};

export default PolicyCategoryScreen;

const styles = StyleSheet.create({});
