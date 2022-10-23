/*import React from 'react';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './../../login/components/login-components';
import MenuTabs from './../components/navigationTabs';
import Carga from './../../login/components/login-usuario-component'

const InicioPrueba = createStackNavigator({
    Inicio: {
        screen: Inicio,
        navigationOptions: { 
            headerShown: false,
        }
    },

    MenuTabs: {
        screen: MenuTabs,
        navigationOptions: { 
            headerShown: false,   
        }
    },

    Carga: {
        screen: Carga,
        navigationOptions: { 
            headerShown: false,   
        }
    },

})

export default createAppContainer(InicioPrueba);*/


import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './../../login/components/login-components';
import ComponenteLogin from './../../login/components/login-usuario-component'
import MenuTabs from './navigationTabs'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
            name="Home" 
            component={HomeScreen}  
            options = {{
              headerShown: false
            }}
        />

        <Stack.Screen 
            name="ComponenteLogin" 
            component={ComponenteLogin} 
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