/* eslint-disable jsx-a11y/accessible-emoji */
import { CustomButton, Heading } from '@pixelpace/ui';
import React from 'react';
import { Button, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './features/Auth/signIn/ui/LoginScreen';
import ActivateAccountScreen from './features/Auth/activateAccount/ui/ActivateAccountScreen';
import AccountResetScreen from './features/Auth/passwordReset/ui/AccountReset';
import DashboardScreen from './features/Home/home/ui/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatScreen from './features/Chat/chat/ui/ChatScreen';
import ProfileScreen from './features/Profile/profile/ui/ProfileScreen';
import MoreScreen from './features/More/more/ui/MoreScreen';
import HomeScreen from './features/Home/home/ui/HomeScreen';
import ClaimScreen from './features/Claims/claims/ui/ClaimsScreen';
import AboutUsScreen from './features/More/aboutUs/ui/AboutUsScreen';
import ProductInfoScreen from './features/More/productInfo/ui/ProductInfoScreen';
import HelpScreen from './features/More/help/ui/HelpScreen';
import SettingsScreen from './features/More/settings/ui/SettingsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function Dashboard() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Claims" component={ClaimScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="ActivateAccount"
          component={ActivateAccountScreen}
        />
        <Stack.Screen name="AccountReset" component={AccountResetScreen} />

      </Stack.Navigator> */}

        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="AboutUs" component={AboutUsScreen} />
          <Stack.Screen name="ProductInfo" component={ProductInfoScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Help" component={HelpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
