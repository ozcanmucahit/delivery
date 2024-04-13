import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from './Screen/Onboarding';
import Login from './Screen/Login';
import Home from './Screen/Home';
import Profile from './Screen/Profile';
import Details from './Screen/Details';
import Checkout from './Screen/Checkout';
import Maps from './Screen/Maps';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{
    animationEnabled: false,
    headerShown:false
  }}>
      <Stack.Screen
        name="home"
        component={Onboarding}
        options={{ title: '' }} 
      />
      <Stack.Screen name="login" component={Login} options={{title:''}} />
      <Stack.Screen name="product" component={Home}  options={{title:''}}/>
      <Stack.Screen name="details" component={Details} options={{title:''}}/>
      <Stack.Screen name="profile" component={Profile} options={{title:''}}/>
      <Stack.Screen name="checkout" component={Checkout} options={{title:''}}/>
      <Stack.Screen name="maps" component={Maps} options={{title:''}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;