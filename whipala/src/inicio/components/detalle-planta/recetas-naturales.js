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
                    Recetas Medicas
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
                            source = {{uri: data.imagRecet}}
                            style = {styles.posterImagen}
                        />

                        <Text style = {styles.titulo021}>
                            Recetas Naturales
                        </Text>  

                        <View style = {{height:30}}/>

                        <View style = {styles.ancho5}>

                                <View style = {styles.porcentaje2_1}>
                                    <Text style = {styles.titulo02}>
                                        {data.titlReceta}
                                    </Text>  
                                    <Text style = {styles.titulo01}>
                                           -{data.ingre1}
                                    </Text> 
                                    <Text style = {styles.titulo01}>
                                           -{data.ingre2}
                                    </Text>                      
                                </View>
                               
                            </View>
                        </View>

                    <View style = {styles.cont2}>

                        <Text style = {styles.suscripcion}>
                            Preparación
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
                                {data.recet1}
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
                                {data.recet2}
                            </Text>                          
                        </View>
                        <View style = {styles.porcentaje2_2}>
                            <Text></Text>   
                        </View>
    
                    </View>

                    <View style = {{height: 10}}/>

                    <View style = {styles.ancho7}>

                        <View style = {{width: '20%'}}>
                            <Text style = {styles.titulo021}>
                            Dosis: 
                            </Text> 
                        </View>

                        <View style = {{width: '90%'}}>
                            <Text style = {styles.titulo022}>
                                {data.dosis}
                            </Text>
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
        height: 230,
        width: 320,
        resizeMode: 'cover'
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
        marginTop: 20
    },
    ancho4:{
        width: '100%',
        height: 90,
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ancho5:{
        width: '100%',
        height: 120,
        borderRadius: 15,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10
    },

    ancho6:{
        width: '100%',
        height: 40,
        borderRadius: 15,
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 15
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
    titulo01: {
        fontSize: 18,
        color: '#102d3b',
        marginLeft: 10
    },
    titulo02: {
        fontSize: 20,
        color: '#102d3b',
        fontWeight: 'bold'
    },
    titulo021: {
        fontSize: 20,
        color: '#102d3b',
        fontWeight: 'bold',
    },
    titulo022: {
        fontSize: 16,
        color: '#102d3b',
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
    },
    ancho7:{
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
})


export default Pantalla1;