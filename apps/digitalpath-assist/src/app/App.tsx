/* eslint-disable jsx-a11y/accessible-emoji */
import { CustomButton, Heading } from '@pixelpace/ui';
import React from 'react';
import { Button, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './features/Auth/signIn/ui/LoginScreen';
import ActivateAccountScreen from './features/Auth/activateAccount/ui/ActivateAccountScreen';
import AccountResetScreen from './features/Auth/passwordReset/ui/AccountReset';
import DashboardScreen from './features/Dashboard/home/ui/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatScreen from './features/Dashboard/chat/ui/ChatScreen';
import ProfileScreen from './features/Dashboard/profile/ui/ProfileScreen';
import MoreScreen from './features/Dashboard/more/ui/MoreScreen';
import HomeScreen from './features/Dashboard/home/ui/HomeScreen';
import ClaimScreen from './features/Dashboard/claims/ui/ClaimsScreen';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="ActivateAccount"
          component={ActivateAccountScreen}
        />
        <Stack.Screen name="AccountReset" component={AccountResetScreen} />

      </Stack.Navigator> */}

      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Claims" component={ClaimScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
        {/* <Tab.Screen name="Claims" component={ClaimsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
