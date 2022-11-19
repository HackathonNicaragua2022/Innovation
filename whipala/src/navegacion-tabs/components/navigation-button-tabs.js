import * as React from 'react';

import { 
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';


import Ionicons from 'react-native-vector-icons/Ionicons';

import InicioStackScreen from './stack-inicio-screen';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused
                ? 'calendar-outline'
                : 'calendar-outline';
            } 

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        
        tabBarOptions={{
          activeTintColor: '#b2ff59',
          activeBackgroundColor: "#3b6376",
          inactiveTintColor: '#b2ff59',
          inactiveBackgroundColor: '#3b6376',
        }}

        initialRouteName="Inicio"

        >

            <Tab.Screen 
                name = "Inicio" 
                component = { InicioStackScreen } 
                options={{
                    title: "Inicio",
                    headerShown: false
                }}  
            
        />
        
      </Tab.Navigator>
  );

}

export default App;