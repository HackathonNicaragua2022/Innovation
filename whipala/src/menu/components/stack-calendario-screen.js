import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Calendario from './../../calendario/components/calendario-component';

const ClendarioeStack = createStackNavigator();

function ClendarioeStackScreen() {
    return (
     <ClendarioeStack.Navigator>
          <ClendarioeStack.Screen
            name = "Calendario" 
            component={ Calendario }
            options = {{
              headerShown: false
            }}
        />
      </ClendarioeStack.Navigator>
    );
}

export default ClendarioeStackScreen;