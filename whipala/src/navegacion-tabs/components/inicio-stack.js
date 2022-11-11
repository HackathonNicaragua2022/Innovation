import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuTabs from './navigation-button-tabs'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuTabs">
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