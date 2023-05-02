import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Button, Divider, List, Text, TextInput } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const VehicleLicenseScreen = ({ navigation }) => {
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
              Vehicle Licenses
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
        <View style={{ flex: 1, marginTop: 0 }}>
          <List.Item
            title="JR79CK"
            description="Polo vivo"
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            left={(props) => <List.Icon {...props} icon="car-outline" />} // card-account-details-outline
            onPress={() => navigation.navigate('VehicleLicenseDetail')}
          />
          <Divider />
          <List.Item
            title="BZ49TRGP"
            description="Audi A3"
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            left={(props) => <List.Icon {...props} icon="car-outline" />}
            onPress={() => navigation.navigate('VehicleLicenseDetail')}
          />
          <Divider />

          <View style={{ flex: 0.1, marginTop: 0, padding: 16 }}>
            <Button
              icon="credit-card-scan-outline"
              mode="contained"
              onPress={() => navigation.navigate('VehicleLicenseScanner')}
              style={{ backgroundColor: '#25326e' }}
            >
              Scan vehicle license
            </Button>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default VehicleLicenseScreen;

const styles = StyleSheet.create({});
