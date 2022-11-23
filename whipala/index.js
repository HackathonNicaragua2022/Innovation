/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './src/calendario/components/encabezado-calendario'
import App from './src/navegacion-tabs/components/inicio-stack'
//import App from './src/notificaciones/containers/lista-notificaciones-container'
//import App from './src/farmacia/container/lista-detalle-farmacia-container'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
