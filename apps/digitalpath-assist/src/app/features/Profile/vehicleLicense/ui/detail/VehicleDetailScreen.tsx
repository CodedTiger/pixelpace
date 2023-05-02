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

const VehicleDetailScreen = ({ navigation }) => {
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
              Vehicle
            </Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={{ flex: 1, marginTop: 0, backgroundColor: 'white' }}>
        <View style={{ alignItems: 'center', marginTop: -35 }}>
          <Avatar.Image
            size={60}
            source={require('../../../../../assets/images/app-logo.png')}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', marginVertical: 16 }}>
            <Text variant="titleMedium" style={{ color: 'black' }}>
              VW Polo
            </Text>
          </View>
          <Divider />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                flex: 1,
                textAlign: 'left',
              }}
            >
              Control number
            </Text>
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                textAlign: 'right',
                flex: 1,
              }}
            >
              47288299274993
            </Text>
          </View>
          <Divider />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                flex: 1,
                textAlign: 'left',
              }}
            >
              Gender
            </Text>
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                textAlign: 'right',
                flex: 1,
              }}
            >
              Female
            </Text>
          </View>
          <Divider />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                flex: 1,
                textAlign: 'left',
              }}
            >
              Date of birth
            </Text>
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                textAlign: 'right',
                flex: 1,
              }}
            >
              47288299274993
            </Text>
          </View>
          <Divider />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                flex: 1,
                textAlign: 'left',
              }}
            >
              Driver restrictions
            </Text>
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                textAlign: 'right',
                flex: 1,
              }}
            >
              47288299274993
            </Text>
          </View>
          <Divider />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                flex: 1,
                textAlign: 'left',
              }}
            >
              Certificate number
            </Text>
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                textAlign: 'right',
                flex: 1,
              }}
            >
              47288299274993
            </Text>
          </View>

          <Divider />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                flex: 1,
                textAlign: 'left',
              }}
            >
              Valid from
            </Text>
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                textAlign: 'right',
                flex: 1,
              }}
            >
              47288299274993
            </Text>
          </View>

          <Divider />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                flex: 1,
                textAlign: 'left',
              }}
            >
              valid to
            </Text>
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                textAlign: 'right',
                flex: 1,
              }}
            >
              47288299274993
            </Text>
          </View>
          <Divider />

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 16,
            }}
          >
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                flex: 1,
                textAlign: 'left',
              }}
            >
              Issued
            </Text>
            <Text
              variant="titleMedium"
              style={{
                color: 'black',
                textAlign: 'right',
                flex: 1,
              }}
            >
              ZA
            </Text>
          </View>
          <Divider />
        </View>
      </View>
    </ImageBackground>
  );
};

export default VehicleDetailScreen;

const styles = StyleSheet.create({});
