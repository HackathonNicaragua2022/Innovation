/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './src/inicio/containers/lista-plantas-container'
import App from './src/navegacion-tabs/components/inicio-stack'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
