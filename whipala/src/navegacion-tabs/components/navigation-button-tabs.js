import * as React from 'react';

import { 
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';


import Icon from 'react-native-vector-icons/Ionicons';

import InicioStackScreen from './stack-inicio-screen';
import CalendarioStackScreen from './stack-calendario-screen';
import NotificacionesStackScreen from './stack-notificaciones-screen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Calendario') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Notificaciones') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        
        tabBarOptions={{
          activeTintColor: '#60be8c',
          activeBackgroundColor: "#fff",
          inactiveTintColor: '#525275',
          inactiveBackgroundColor: '#f7f5fc',
        }}

        initialRouteName="Inicio"

        >

            <Tab.Screen 
                name = "Notificaciones" 
                component = { NotificacionesStackScreen } 
                options={{
                    title: "Notificaciones",
                    headerShown: false
                }}  
            />

            <Tab.Screen 
                name = "Inicio" 
                component = { InicioStackScreen } 
                options={{
                    title: "Inicio",
                    headerShown: false
                }}
            />

            <Tab.Screen 
                name = "Calendario" 
                component = { CalendarioStackScreen } 
                options={{
                    title: "Calendario",
                    headerShown: false
                }}  
        />
      </Tab.Navigator>
  );

}

export default App;