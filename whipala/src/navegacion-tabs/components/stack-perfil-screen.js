import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Perfil from './../../perfil/containers/perfil-container'
import Chat from './../../perfil/containers/bienvenida-container';
import Consulta from './../../perfil/containers/consulta-container';
import Resultado from './../../perfil/containers/resultado-container'

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
            <PerfilStack.Screen
                name = "Chat"
                component = { Chat }
                options = {{
                    headerShown: false
            }} 
            />
            <PerfilStack.Screen
                name = "Consulta"
                component = { Consulta }
                options = {{
                    headerShown: false
                }} 
            />
            <PerfilStack.Screen
                name = "Resultado"
                component= { Resultado }
                options= {{
                    headerShown: false
                }}
            />
        </PerfilStack.Navigator>
        
    )
}

export default PerfilStackStackScreen;