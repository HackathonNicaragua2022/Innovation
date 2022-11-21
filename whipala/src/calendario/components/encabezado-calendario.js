import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Calendario = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.ancho}>
                <Text style = {styles.titulo}>
                        Citas Medicas
                </Text>
                <Text style = {styles.descripcion}>
                        Revis tu agenda de citas medicas.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3b6376',
        height: 125,
        borderRadius: 40,
        marginTop: -25,
        alignItems: 'center'
    },
    ancho:{
        width: '95%',
        alignItems: 'center'
    },
    titulo: {
        color: '#fff',
        marginTop: 40,
        fontWeight: 'bold',
        fontSize: 25
    },
    descripcion:{
        color: '#fff',
        marginTop: 2,
        fontSize: 17
    }
})

export default Calendario;