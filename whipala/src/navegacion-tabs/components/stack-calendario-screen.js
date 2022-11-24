import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Calendario from './../../calendario/containers/calendario-container';
import CalendarioDetalle from './../../calendario/containers/lista-detalle-calendario-container'

const CalendarioStack = createStackNavigator();

const CalendarioStackScreen = () => {
    return(
        <CalendarioStack.Navigator>
            <CalendarioStack.Screen
                name = "Citas"
                component = { Calendario }
                options = {{
                    headerShown: false
                }} 
            />
            <CalendarioStack.Screen
                name = "calendarioDetalle"
                component = { CalendarioDetalle }
                options = {{
                    headerShown: false
                }} 
            />
        </CalendarioStack.Navigator>
    )
}

export default CalendarioStackScreen;