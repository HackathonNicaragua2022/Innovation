import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FarmaciaCon from './../../farmacia/container/lista-farmacia-container';
import FarmaciaDetalles from './../../farmacia/container/lista-detalle-farmacia-container';

const FarmaciaStack = createStackNavigator();

const FarmaciaStackScreen = () => {
    return(
        <FarmaciaStack.Navigator>
            <FarmaciaStack.Screen
                name = "FarmaciaCon"
                component = { FarmaciaCon }
                options = {{
                    headerShown: false
                }} 
            />
            <FarmaciaStack.Screen
                name = "Prueba"
                component = { FarmaciaDetalles }
                options = {{
                    headerShown: false
                }} 
            />

        </FarmaciaStack.Navigator>
    )
}

export default FarmaciaStackScreen;