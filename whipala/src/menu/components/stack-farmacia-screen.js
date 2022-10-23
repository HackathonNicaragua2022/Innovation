import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Farmacia from './../../farmacia/components/farmacia-component';

const FarmaciaStack = createStackNavigator();

function FarmaciaStackStackScreen() {
    return (
     <FarmaciaStack.Navigator>
          <FarmaciaStack.Screen
            name = "Farmacia" 
            component={ Farmacia }
            options = {{
              headerShown: false
            }}
        />
      </FarmaciaStack.Navigator>
    );
}

export default FarmaciaStackStackScreen;