import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import Login from './src/pages/Login';
import Beranda from './src/pages/Beranda';
import Profile from './src/pages/Profile';
import Riwayat from './src/pages/Riwayat';
import Output from './src/pages/Output';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Beranda" component={Beranda} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Riwayat" component={Riwayat} />
        <Stack.Screen name="Output" component={Output} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
