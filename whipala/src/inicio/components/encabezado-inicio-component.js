import * as React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Encabezado = () => {
    return(
        <View style = {styles.fondo}>

            <View style = {styles.fondoTexto}>
                <Text style = {styles.titulo}>
                    ¡Bienvenido!
                </Text>

                <Text style = {styles.subTitulo}>
                    Brandon Estrada
                </Text>
            </View>

            <View style = {styles.espacio}/>

            <View style = {styles.fondoTexto}>
                <Text style = {styles.descripcion}>
                El médico debe proceder imitando los medios que la naturaleza emplearía ordinariamente para curar una enfermedad.
                </Text>
            </View>
          
        </View>
    )
}

const styles = StyleSheet.create({
    fondo: {
        marginTop: -570,
        alignItems: 'center'
    },

    fondoTexto: {
        width: '95%',
    },

    titulo:{
        fontSize: 30,
        fontWeight: 'bold'
    },

    subTitulo: {
        fontSize: 20,
    },

    espacio:{
       height: 50,
    },

    descripcion: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        lineHeight: 30
    }
})

export default Encabezado;