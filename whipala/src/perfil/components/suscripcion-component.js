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

const ListaNotificacion = () => { 

    return(
        <ScrollView style = {styles.fondoFlatList}>

            <Text style = {styles.suscripcion}>
                Tu Suscripción
            </Text>

            <TouchableOpacity>
        
                <View style = {styles.fondo}>

                    <View style = {styles.fondoLista2}>

                        <View style = {styles.direccion2}>
                            <View style = {styles.porcentaje1_1}>
                                <View style = {styles.icono2}>
                                    <Icon name= 'journal' size={20} color={'#fff'}></Icon>
                                </View>
                            </View>

                            <View style = {styles.porcentaje2_1}>
                                <Text style = {styles.titulo1}>
                                     Obtén whipala premiun...
                                </Text>
                            </View>
                        </View>
                    
                    </View>

                </View>

            </TouchableOpacity>
        </ScrollView>

    );

}

const styles = StyleSheet.create({
    fondo: {
        alignItems: 'center',
        marginTop: 10,
    },

    fondoLista2: {
        width: '95%', 
        backgroundColor: '#ebd192',
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

    icono2:{
        width: 35,
        height: 35,
        backgroundColor: '#544014',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    direccion2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'center',
        height: 50
        //backgroundColor: 'blue'
    },
    titulo1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#544014'
    },
    porcentaje1_1: {
        width: '15%',
    },

    porcentaje2_1:{
        width: '90%',
    },
    suscripcion:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#102d3b',
        marginTop: 20,
        paddingLeft: 10
    }
})

export default ListaNotificacion;