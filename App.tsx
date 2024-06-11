import React from 'react';
import { HomeScreen } from './app/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewItemScreen } from './app/screens/NewScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="New" component={NewItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

