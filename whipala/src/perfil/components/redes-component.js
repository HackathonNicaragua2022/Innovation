import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
    Linking,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';

const ListaNotificacion = () => { 

    const handleFace = async ()=> {
        Linking.openURL('https://www.facebook.com/');
    }
    const handleInsta = async ()=> {
        Linking.openURL('https://www.instagram.com/');
    }
    const handleYouTu = async ()=> {
        Linking.openURL('https://www.youtube.com/');
    }
    const handleWhipa = async ()=> {
        Linking.openURL('https://www.youtube.com/');
    }

    return(
        <ScrollView style = {styles.fondoFlatList}>

            <Text style = {styles.suscripcion}>
                Nuestras Redes
            </Text>

            <TouchableOpacity
                onPress={handleFace}
            >       
                <View style = {styles.fondo}>

                <View style = {styles.fondoLista2}>

                    <View style = {styles.direccion2}>
                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono2}>
                                <Icon name= 'logo-facebook' size={25} color={'#3a7456'}></Icon>
                            </View>
                        </View>

                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                Facebook
                            </Text>
                        </View>
                    </View>

                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                 onPress={handleInsta}
            >       
                <View style = {styles.fondo}>

                <View style = {styles.fondoLista}>

                    <View style = {styles.direccion2}>
                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono2}>
                                <Icon name= 'logo-instagram' size={25} color={'#3a7456'}></Icon>
                            </View>
                        </View>

                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                Instagran
                            </Text>
                        </View>
                    </View>

                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                 onPress={handleYouTu}
            >       
                <View style = {styles.fondo}>

                <View style = {styles.fondoLista}>

                    <View style = {styles.direccion2}>
                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono2}>
                                <Icon name= 'logo-youtube' size={25} color={'#3a7456'}></Icon>
                            </View>
                        </View>

                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                YouTube
                            </Text>
                        </View>
                    </View>

                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                 onPress={handleWhipa}
            >       
                <View style = {styles.fondo}>

                <View style = {styles.fondoLista3}>

                    <View style = {styles.direccion2}>
                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono2}>
                                <Icon name= 'logo-chrome' size={25} color={'#3a7456'}></Icon>
                            </View>
                        </View>

                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                Whipala
                            </Text>
                        </View>
                    </View>

                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>       
                <View style = {styles.fondo}>

                    <View style = {styles.fondoButton}>

                        <View style = {styles.direccionButton}>
                            <View>
                                <View style = {styles.icono3}>
                                    <Icon name= 'exit' size={25} color={'#3a7456'}></Icon>
                                </View>
                            </View>

                            <View style = {{width: 20}}/>

                            <View>
                                <Text style = {styles.titulo1}>
                                    Cerrar Sesión
                                </Text>
                            </View>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>


            <View style = {styles.fondo}>

                <View style = {styles.fondoDato}>

                    <View style = {styles.direccionButton}>
                        <View>
                            <Text style = {styles.tituloVersion}>
                                Version 1.1.1
                            </Text>
                        </View>
                    </View>

                </View>
            </View>


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
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: -11
    },
    fondoLista2: {
        width: '95%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    fondoDato: {
        width: '95%',
        backgroundColor: '#f7f5fc',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: 25
    },
    fondoButton: {
        width: '95%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        borderRadius: 60,
        borderColor: '#d0cbde',
        borderWidth: 1.5
    },
    fondoLista3: {
        width: '95%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: -11,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15
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
        backgroundColor: '#fff',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icono3:{
        width: 35,
        height: 35,
        backgroundColor: '#f7f5fc',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    direccion2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'center',
        height: 50,
        //backgroundColor: 'blue'
    },
    direccionButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '95%',
        alignItems: 'center',
        height: 50,
        //backgroundColor: 'blue'
    },
    titulo1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#102d3b'
    },
    tituloVersion:{
        fontSize: 15,
        color: '#102d3b'
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