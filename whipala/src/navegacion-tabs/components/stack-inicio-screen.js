import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './../../inicio/containers/lista-dolencias-container'
import Dolencia from './../../inicio/containers/detalle-dolencia-container';
import Plantas from './../../inicio/containers/detalle-planta-container';

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
            <InicioStack.Screen
                name = "Dolencia"
                component = { Dolencia }
                options = {{
                headerShown: false
            }} 
            />

            <InicioStack.Screen
                name = "Plantas"
                component = { Plantas }
                options = {{
                headerShown: false
            }} 
            />
        </InicioStack.Navigator>
    )
}

export default InicioStackScreen;