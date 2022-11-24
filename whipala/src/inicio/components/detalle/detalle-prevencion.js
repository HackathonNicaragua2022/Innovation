import React from 'react';

import {
    View,
    Text,
    Button,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Pantalla1 = (props) => {

    const { data, navegar, cambiarText, nombre } = props;

    return (

        <ScrollView style = {styles.fondoFlatList}>

            <View style = {styles.efectoSuperior}>
                <Text
                    style = {styles.indicador}
                >
                    Prevención
                </Text>

            </View>

            <TouchableOpacity
                title='Ir a pantalla 1'
                onPress={
                    () => {
                        navegar('pantalla1');
                    }
                }
            >
                <View style = {styles.fondoButton}>
                    <Icon name= 'arrow-back-outline' size={20} color={'#3a7456'}></Icon>
                </View>
            </TouchableOpacity>
            <   TextInput
                    onChangeText={cambiarText}
                    defaultValue={nombre}
                />
            <View style = {{height: 15}}/>

            <View style = {
                {
                    //backgroundColor: 'red', 
                    height: '100%', 
                    width: '100%', 
                    padding: 10
                }
            }>


                <View style = {styles.cont}>

                  
                    <View style = {styles.cont1}>
                        <Image
                            source = {{uri: data.imagenInfor}}
                            style = {styles.posterImagen}
                        />

                        <View>
                            <Text style = {styles.descripcion}>
                                {data.prevent}
                            </Text>
                        </View>
                    </View>

                    <View style = {styles.cont2}>

                        <Text style = {styles.suscripcion}>
                            Consejos Saludables
                        </Text>
                    </View>

                    <View style = {{height: 0}}/>

                    <View style = {styles.ancho4}>
                        <View style = {styles.porcentaje1_1}>
                            <View style = {
                                {
                                    backgroundColor: '#60be8c',
                                    width: 45,
                                    height: 45,
                                    borderRadius: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }
                            }>   
                                <Text style = {styles.numero}>
                                    1
                                </Text> 
                            </View>
                        </View>
                        
                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                {data.consej1}
                            </Text>                          
                        </View>
                        <View style = {styles.porcentaje2_2}>
                            <Text></Text>   
                        </View>
    
                    </View>

                    <View style = {{height: 10}}/>

                    <View style = {styles.ancho4}>
                        <View style = {styles.porcentaje1_1}>
                            <View style = {
                                {
                                    backgroundColor: '#60be8c',
                                    width: 45,
                                    height: 45,
                                    borderRadius: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }
                            }>   
                                <Text style = {styles.numero}>
                                    2
                                </Text> 
                            </View>
                        </View>
                        
                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                {data.consej2}
                            </Text>                          
                        </View>
                        <View style = {styles.porcentaje2_2}>
                            <Text></Text>   
                        </View>
    
                    </View>

                    <View style = {{height: 10}}/>

                    <View style = {styles.ancho4}>
                        <View style = {styles.porcentaje1_1}>
                            <View style = {
                                {
                                    backgroundColor: '#60be8c',
                                    width: 45,
                                    height: 45,
                                    borderRadius: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }
                            }>   
                                <Text style = {styles.numero}>
                                    3
                                </Text> 
                            </View>
                        </View>
                        
                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                {data.consej3}
                            </Text>                          
                        </View>
                        <View style = {styles.porcentaje2_2}>
                            <Text></Text>   
                        </View>
    
                    </View>

                </View>   
            </View>
        </ScrollView>        
    );

};


const styles = StyleSheet.create({
    fondo: {
        alignItems: 'center',
        marginTop: 10,
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
    efectoSuperior:{
        backgroundColor: '#60be8c',
        height: 110,
        borderRadius: 35,
        marginTop: -25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fondoButton: {
        backgroundColor: '#f7f5fc',
        height: 35,
        width: 35,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -59,
        marginLeft: 7
    },
    posterImagen:{
        height: 300,
        width: 300
    },
    cont:{
        width: '100%',
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    descripcion: {
        color:'#102d3b',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 30,
        marginTop: 20
    },
    sub:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    //OTR

    cont1:{
        width: '100%',
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cont2:{
        width: '100%',
        //backgroundColor: 'green',
        height: 40,
        marginTop: 40
    },
    ancho4:{
        width: '100%',
        height: 70,
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    porcentaje1_1: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    porcentaje2_1:{
        width: '80%',
        justifyContent: 'center',
    },
    porcentaje2_2:{
        width: '8%',
        justifyContent: 'center',
    },
    titulo1: {
        fontSize: 18,
        color: '#102d3b'
    },
    numero: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    suscripcion:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#102d3b',
    }
})


export default Pantalla1;