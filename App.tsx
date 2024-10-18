import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import {Colors} from './src/theme/Colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from './src/screen/ChatScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
      {/* <HomeScreen /> */}
    </NavigationContainer>
  );
};

export default App;
