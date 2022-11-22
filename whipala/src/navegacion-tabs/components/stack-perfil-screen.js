import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Perfil from './../../perfil/containers/perfil-container'

const PerfilStack = createStackNavigator();

const PerfilStackStackScreen = () => {
    return(
        <PerfilStack.Navigator>
            <PerfilStack.Screen
                name = "Perfil"
                component = { Perfil }
                options = {{
                    headerShown: false
                }} 
            />
        </PerfilStack.Navigator>
    )
}

export default PerfilStackStackScreen;