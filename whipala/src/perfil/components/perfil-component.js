import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import Redes from './redes-component';
import Suscripcion from './suscripcion-component';

const ListaNotificacion = () => { 

    return(
        <ScrollView style = {styles.fondoFlatList}>

            <View style = {styles.efectoSuperior}>
                <Text
                    style = {styles.indicador}
                >
                    Perfil
                </Text>
            </View>

            <View style = {{height: 15}}/>

            <TouchableOpacity>
        
                <View style = {styles.fondo}>

                    <View style = {styles.fondoLista}>

                        <View style = {styles.direccion}>
                            <View style = {styles.porcentaje1}>
                                <View style = {styles.icono}>
                                    <Icon name= 'person-outline' size={25} color={'#3a7456'}></Icon>
                                </View>
                            </View>

                            <View style = {styles.porcentaje2}>
                                <Text style = {styles.titulo}>
                                Kevin Castro
                                </Text>

                                <Text style = {styles.eti}>
                                    kc83208@gmail.com
                                </Text>
                            </View>

                            <View style = {styles.porcentaje3}>
                                <View style = {styles.iconoEditar}>
                                    <Icon name= 'pencil' size={20} color={'#3a7456'}></Icon>
                                </View>
                            </View>
                        </View>
                    
                    </View>

                </View>

            </TouchableOpacity>

            <Suscripcion/>
            <Redes/>

        </ScrollView>

    );

}

const styles = StyleSheet.create({
    fondo: {
        alignItems: 'center',
        marginTop: 10,
    },

    fondoLista: {
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },
    separador: {
        width: 15
    },

    fondoFlatList:{
        flex: 1,
        backgroundColor: '#f7f5fc'
    },   
    indicador:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    icono:{
        width: 60,
        height: 60,
        backgroundColor: '#c6e0d9',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconoEditar:{
        width: 40,
        height: 40,
        backgroundColor: '#c6e0d9',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    direccion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'center',
        height: 100
        //backgroundColor: 'blue'
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#102d3b'
    },
    eti: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#102d3b',
        textDecorationLine: 'underline'
    },
    porcentaje1: {
        width: '20%',
    },
    porcentaje2:{
        width: '70%',
    },

    efectoSuperior:{
        backgroundColor: '#60be8c',
        height: 110,
        borderRadius: 35,
        marginTop: -25,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default ListaNotificacion;