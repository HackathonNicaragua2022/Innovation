import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CitaMedica from './../../citas-medicas/components/citas-medicas-component';

const CitaMedicaStack = createStackNavigator();

function CitaMedicaStackScreen() {
    return (
     <CitaMedicaStack.Navigator>
          <CitaMedicaStack.Screen
            name = "ChatBot" 
            component={ CitaMedica }
            options = {{
              headerShown: false
            }}
        />
      </CitaMedicaStack.Navigator>
    );
}

export default CitaMedicaStackScreen;