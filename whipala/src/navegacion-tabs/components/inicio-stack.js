import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuTabs from './navigation-button-tabs';
import Login from './../components/../../login/container/login-container'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
            name="Login" 
            component={Login} 
            options = {{
              headerShown: false
            }}
        />
        <Stack.Screen 
            name="MenuTabs" 
            component={MenuTabs} 
            options = {{
              headerShown: false
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;