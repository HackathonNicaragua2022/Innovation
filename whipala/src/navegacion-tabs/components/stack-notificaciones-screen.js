import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notificaciones from './../../notificaciones/containers/lista-notificaciones-container';
import NotificacionesDetalles from './../../notificaciones/containers/lista-notificaciones-detalles-container';

const NotificacionesStack = createStackNavigator();

const NotificacionesStackScreen = () => {
    return(
        <NotificacionesStack.Navigator>
            <NotificacionesStack.Screen
                name = "Notificaciones"
                component = { Notificaciones }
                options = {{
                    headerShown: false
                }} 
            />

            <NotificacionesStack.Screen
                name = "NotificacionesDetalle"
                component = { NotificacionesDetalles }
                options = {{
                    headerShown: false
                }} 
            />
        </NotificacionesStack.Navigator>
    )
}

export default NotificacionesStackScreen;