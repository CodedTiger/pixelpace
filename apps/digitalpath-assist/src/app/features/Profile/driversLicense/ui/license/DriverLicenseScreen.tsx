import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Button, Divider, List, Text, TextInput } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DriveLicenseScreen = ({ navigation }) => {
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
              Drivers Licenses
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
        <View style={{ flex: 1, marginTop: 0 }}>
          <List.Item
            title="Thabo Ndebele"
            description="Male"
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            left={(props) => (
              <List.Icon {...props} icon="card-account-details-outline" />
            )} //
            onPress={() => navigation.navigate('DriverLicenseDetail')}
          />
          <Divider />
          <List.Item
            title="Jane Doe"
            description="Female"
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            left={(props) => (
              <List.Icon {...props} icon="card-account-details-outline" />
            )}
            onPress={() => navigation.navigate('DriverLicenseDetail')}
          />
          <Divider />

          <View style={{ flex: 0.1, marginTop: 0, padding: 16 }}>
            <Button
              icon="credit-card-scan-outline"
              mode="contained"
              onPress={() => navigation.navigate('DriverLicenseScanner')}
              style={{ backgroundColor: '#25326e' }}
            >
              Scan drivers license
            </Button>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default DriveLicenseScreen;

const styles = StyleSheet.create({});
