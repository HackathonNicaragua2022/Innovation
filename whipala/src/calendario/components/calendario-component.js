import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import Encabezado from './encabezado-calendario'

const Calendario = () => {
    return(
        <View style = {styles.container}>
            <Encabezado/>
            <Text style = {styles.letra}>
                Hola soy calendario
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#102d3b',
        flex: 1
    },
letra: {
    color: '#fff'
}
})

export default Calendario;