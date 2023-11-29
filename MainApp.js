// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CounterProvider } from './CounterContext';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <CounterProvider>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Screen1" component={Screen1} 
    />
      <Stack.Screen name="Screen2" component={Screen2} 
    />
      <Stack.Screen name="Screen3" component={Screen3} 
    />
    </Stack.Navigator>
    </NavigationContainer>
    </CounterProvider>
    );
};

export default MainApp;
