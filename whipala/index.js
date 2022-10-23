/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';

import App from './src/menu/components/inicio-stack'

//import App from './src/login/components/login-components'
//import App from './src/menu/components/navigationTabs'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
