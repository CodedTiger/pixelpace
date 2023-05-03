import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import {
  Avatar,
  Button,
  Divider,
  List,
  Text,
  TextInput,
} from 'react-native-paper';
import { StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PersonalDetailScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require('../../../../../assets/images/backgrounds/star-mask.png')}
      resizeMode="repeat"
      style={{ flex: 1, marginTop: -1 }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 0.2, padding: 16 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
            }}
          >
            <Text variant="titleMedium" style={{ color: 'white' }}>
              My personal details
            </Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
        <View style={{ alignItems: 'center', marginTop: -35 }}>
          <Avatar.Image
            size={70}
            source={require('../../../../../assets/images/app-logo.png')}
          />
        </View>
        <View style={{ flex: 1 }}>
          <List.Item
            title={
              <Text style={{ textAlign: 'center' }} variant="titleMedium">
                Thabo Ndebele
              </Text>
            }
            description={
              <Text style={{ textAlign: 'center' }}>072 *** ****</Text>
            }
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => navigation.navigate('UserDetail')}
          />
          <Divider />

          <List.Item
            title="James Ndebele"
            description={null}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => navigation.navigate('UserDetail')}
          />
          <Divider />
          <View style={{ padding: 16 }}>
            <Button
              icon="plus"
              mode="contained"
              onPress={() => navigation.navigate('AddFamilyMember')}
              style={{ backgroundColor: '#25326e' }}
            >
              Add family member
            </Button>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PersonalDetailScreen;

const styles = StyleSheet.create({});
