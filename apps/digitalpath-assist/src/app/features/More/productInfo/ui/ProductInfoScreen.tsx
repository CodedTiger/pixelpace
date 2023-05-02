import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Button, Divider, List, Text, TextInput } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ProductInfoScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require('../../../../assets/images/backgrounds/star-mask.png')}
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
              Product info & terms
            </Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: 0 }}>
            <Image
              source={require('../../../../assets/images/app-logo.png')}
              style={{ width: 80, height: 80 }}
            />
          </View>
        </View>
      </SafeAreaView>
      <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
        <View style={{ flex: 1, marginTop: 0 }}>
          <List.Item
            title="Roadside assist"
            description={null}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            left={(props) => <List.Icon {...props} icon="road-variant" />}
          />
          <Divider />
          <List.Item
            title="Home assist"
            description={null}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            left={(props) => <List.Icon {...props} icon="home-plus-outline" />}
            onPress={() => navigation.navigate('ProductInfo')}
          />
          <Divider />
          <List.Item
            title="Medical assist"
            description={null}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            left={(props) => <List.Icon {...props} icon="medical-bag" />}
            onPress={() => navigation.navigate('Settings')}
          />
          <Divider />
          <List.Item
            title="Crime assist"
            description={null}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            left={(props) => (
              <List.Icon {...props} icon="police-badge-outline" />
            )}
            onPress={() => navigation.navigate('Help')}
          />
          <Divider />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({});
