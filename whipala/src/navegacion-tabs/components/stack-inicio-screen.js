import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './../../inicio/components/inicio-component'

const InicioStack = createStackNavigator();

const InicioStackScreen = () => {
    return(
        <InicioStack.Navigator>
            <InicioStack.Screen
                name = "Inicio"
                component = { Inicio }
                options = {{
                    headerShown: false
                }} 
            />
        </InicioStack.Navigator>
    )
}

export default InicioStackScreen;