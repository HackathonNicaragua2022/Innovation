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
          activeTintColor: '#005202',
          activeBackgroundColor: "white",
          inactiveTintColor: '#005202',
          inactiveBackgroundColor: 'white',
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