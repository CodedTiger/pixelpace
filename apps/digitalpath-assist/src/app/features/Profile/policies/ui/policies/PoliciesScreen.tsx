import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import {
  Button,
  Card,
  Divider,
  IconButton,
  List,
  Text,
  TextInput,
} from 'react-native-paper';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PoliciesScreen = ({ navigation }) => {
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
              My policies
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
        <View style={{ flex: 1, marginTop: 0 }}>
          <Card
            style={{ borderRadius: 0 }}
            onPress={() => navigation.navigate('PolicyCategory')}
          >
            <Card.Title
              title="Insurance Company 1"
              subtitle="Prestige Scheme"
              right={(props) => (
                <IconButton {...props} icon="chevron-right" onPress={null} />
              )}
            />
            <Card.Content>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Text variant="bodyMedium">Policy type:</Text>
                <Text variant="bodyMedium">Monthly</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Text variant="bodyMedium">Policy number:</Text>
                <Text variant="bodyMedium">045********</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Text variant="bodyMedium">Status:</Text>
                <Text variant="bodyMedium">Active</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Text variant="bodyMedium">Premium:</Text>
                <Text variant="bodyMedium">R600.00</Text>
              </View>
            </Card.Content>
          </Card>
          <Divider />
          <Card style={{ borderRadius: 0 }}>
            <Card.Title
              title="Insurance Company 1"
              subtitle="Prestige Scheme"
              right={(props) => (
                <IconButton
                  {...props}
                  icon="chevron-right"
                  onPress={() => {
                    console.log('adasd');
                  }}
                />
              )}
            />
            <Card.Content>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Text variant="bodyMedium">Policy type:</Text>
                <Text variant="bodyMedium">Monthly</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Text variant="bodyMedium">Policy number:</Text>
                <Text variant="bodyMedium">045********</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Text variant="bodyMedium">Status:</Text>
                <Text variant="bodyMedium">Active</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Text variant="bodyMedium">Premium:</Text>
                <Text variant="bodyMedium">R600.00</Text>
              </View>
            </Card.Content>
          </Card>
          <Divider />
        </View>
      </View>
    </ImageBackground>
  );
};

export default PoliciesScreen;

const styles = StyleSheet.create({});
