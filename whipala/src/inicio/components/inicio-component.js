import * as React from 'react';

import {

    ScrollView,
    StyleSheet,
    Image,
    View
} from 'react-native';

//import Encabezado from './encabezado-inicio-component';
import ListaDolencias from './../containers/lista-dolencias-container';
import ListaPlantas from './../containers/lista-plantas-container';

const Inicio = () => {

    return(
        <ScrollView  style = {styles.fondo}>

            <ListaDolencias/>
            <ListaPlantas/>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    fondo:{
        flex: 1,
        //backgroundColor: '#1c1b29',
        backgroundColor: 'white'
    },

    image:{
        width: '100%',
        height: 600,
    },

    espacio:{
        height: 50,
    }
})

export default Inicio;