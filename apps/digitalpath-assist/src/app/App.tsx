/* eslint-disable jsx-a11y/accessible-emoji */
import { CustomButton, Heading } from '@pixelpace/ui';
import React from 'react';
import { Button, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './features/Auth/signIn/ui/LoginScreen';
import ActivateAccountScreen from './features/Auth/activateAccount/ui/ActivateAccountScreen';
import AccountResetScreen from './features/Auth/passwordReset/ui/AccountReset';
import DashboardScreen from './features/Dashboard/dashboard/ui/DashboardScreen';

function HomeScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: 'center', backgroundColor: 'red' }}
      >
        <View>
          <Text>Home Screen</Text>
          <CustomButton />
        </View>
      </SafeAreaView>
    </>
  );
}

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

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="ActivateAccount"
          component={ActivateAccountScreen}
        />
        <Stack.Screen name="AccountReset" component={AccountResetScreen} /> */}
        <Stack.Screen name="Dashboaard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
