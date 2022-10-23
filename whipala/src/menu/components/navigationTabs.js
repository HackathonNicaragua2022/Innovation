import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import CalendarioStackScreen from './stack-calendario-screen';
import CitasMedicasStackScreen from './stack-citas-medicas-screen';
import CharBotStackScreen from './stack-chat-bot-screen';
import FarmaciaStackScreen from './stack-farmacia-screen';
import AjusteStackScreen from './stack-ajuste-screen';

const Tab = createBottomTabNavigator();

const App = ({navigation}) => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Calendario') {
              iconName = focused
                ? 'apps-outline'
                : 'apps-outline';
            } else if (route.name === 'Citas-Medicas') {
              iconName = focused ? 'analytics-outline' : 'analytics-outline';
            } else if (route.name === 'Chat-Bot') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Farmacia') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Ajuste') {
              iconName = focused ? 'home' : 'home';
            }

            // You can return any component that you like here!!!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          
          activeTintColor: '#97ca3f',
          activeBackgroundColor: "#10242d",
          inactiveTintColor: '#2f586e',
          inactiveBackgroundColor: '#10242d',
        }}

        initialRouteName="Calendario"
          /*tabBarOptions={{
            activeTintColor: '#97ca3f',
            activeBackgroundColor: "#10242d",
            inactiveTintColor: '#2f586e',
            inactiveBackgroundColor: '#10242d',
        }}*/
 
        >

            <Tab.Screen 
                name = "Calendario" 
                component = { CalendarioStackScreen } 
                options={{
                    title: "Calendario",
                }}  
            />

            <Tab.Screen 
                name = "Citas-Medicas" 
                component = { CitasMedicasStackScreen } 
                options={{
                    title: "Citas Medicas",
                }}  
            />

            <Tab.Screen 
                name = "Chat-Bot" 
                component = { CharBotStackScreen } 
                options={{
                    title: "ChatBot",
                }}  
            />

            <Tab.Screen 
                name = "Farmacia" 
                component = { FarmaciaStackScreen } 
                options={{
                    title: "Farmacia",
                }}  
            />

            <Tab.Screen 
                name = "Ajuste" 
                component = { AjusteStackScreen } 
                options={{
                    title: "Ajuste",
                }}  
        />
        
      </Tab.Navigator>
  );

  
}

export default App;