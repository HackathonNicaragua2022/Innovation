import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Farmacia from './../../farmacia/container/lista-farmacia-container'

const FarmaciaStack = createStackNavigator();

const FarmaciaStackScreen = () => {
    return(
        <FarmaciaStack.Navigator>
            <FarmaciaStack.Screen
                name = "Farmacia"
                component = { Farmacia }
                options = {{
                    headerShown: false
                }} 
            />
        </FarmaciaStack.Navigator>
    )
}

export default FarmaciaStackScreen;