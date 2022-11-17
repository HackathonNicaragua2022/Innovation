/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/prueba/container/prueba';
//import App from './src/navegacion-tabs/components/inicio-stack'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
