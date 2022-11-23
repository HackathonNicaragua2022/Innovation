import * as React from 'react';

import { 
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';


import Icon from 'react-native-vector-icons/Ionicons';

import InicioStackScreen from './stack-inicio-screen';
import CalendarioStackScreen from './stack-calendario-screen';
import NotificacionesStackScreen from './stack-notificaciones-screen';
import PerfilStackScreen from './stack-perfil-screen'
import FarmaciaStackScreen from './stack-farmacia-screen'

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
            } else if (route.name === 'CitasS') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'NotificacionesE') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Profiles') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Farmacia') {
              iconName = focused ? 'pulse' : 'pulse-outline';
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
                name = "CitasS" 
                component = { CalendarioStackScreen } 
                options={{
                    title: "Citas",
                    headerShown: false
                }}  
            />
            <Tab.Screen 
                name = "NotificacionesE" 
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
                name = "Farmacia" 
                component = { FarmaciaStackScreen } 
                options={{
                    title: "Farmacia",
                    headerShown: false
                }}
            />

            <Tab.Screen 
              name = "Profiles" 
              component = { PerfilStackScreen } 
              options={{
                  title: "Perfil",
                  headerShown: false
              }}  
            />
      </Tab.Navigator>
  );

}

export default App;