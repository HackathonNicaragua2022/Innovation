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

const ListaNotificacion = (props) => { 
        const {navigateFarmaciaDetalle} = props;
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
                                ---------
                                </Text>

                                <Text style = {styles.eti}>
                                    -----@gmail.com
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

            <Text style = {styles.suscripcion}>
                Area de chat
            </Text>

            <TouchableOpacity
                onPress={navigateFarmaciaDetalle}
            >
        
                <View style = {{width: '100%', height: 80, marginLeft: 10}}>

                    <View style = {styles.fondoLista2}>

                        <View style = {styles.direccion2}>
                            <View style = {styles.porcentaje1_1}>
                                <View style = {styles.icono2}>
                                    <Icon name= 'person-outline' size={20} color={'#fff'}></Icon>
                                </View>
                            </View>

                            <View style = {styles.porcentaje2_1}>
                                <Text style = {styles.titulo1}>
                                     Chat-Box
                                </Text>
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