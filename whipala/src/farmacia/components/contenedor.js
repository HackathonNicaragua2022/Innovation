import React from 'react';

import {
    View,
    Text
} from 'react-native';

import EncabezadoContenedor from './../components/encabezajo-farmacia';
import ListaHorizontal from './../container/lista-farmacia-top-container';
import ListaVertical from './../container/lista-farmacia-container'

const App = () => {
    return(
        <View>
            <EncabezadoContenedor/>
            <ListaHorizontal/>
            <ListaVertical/>
        </View>
    )
}

export default App;