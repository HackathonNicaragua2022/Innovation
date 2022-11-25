import React from 'react';

import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import Calendar from 'react-native-calendars/src/calendar';
/*
const Calendario = (props)=>{

    const {list} = props;

    return(
        <ScrollView style = {styles.fondoFlatList}>

            <View style = {styles.efectoSuperior}>
                <Text
                    style = {styles.indicador}
                >
                    Citas
                </Text>
            </View>

            <View style = {styles.doc}>
                <View style = {styles.docContainer}>
                    <View style = {styles.fondoImage}>

                    </View>

                    <View style = {styles.contenedor}>
                        <Text>{list.nom}</Text>
                        <Text>26 de Noviembre del 2022</Text>
                        <Text>Hora: 02:00 pm</Text>
                        <Text>Gasolinera PUMA 1 c. Sur Juigalpa chontales</Text>
                    </View>
                </View>
            </View>

            <Calendar
                // Collection of dates that have to be marked. Default = {}
                markedDates={{
                }}
            />
        </ScrollView>        
    )
}

export default Calendario;


const styles = StyleSheet.create({

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
    doc:{
        backgroundColor: 'red',
        height: 230,
        width: '100%',    
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    docContainer:{
        backgroundColor: '#fff',
        width: '95%',
        height: '90%',
        borderRadius: 20,
        flexDirection: 'row'
    },
    fondoImage:{
        backgroundColor: 'green',
        width: '40%',
    },
    contenedor:{
        backgroundColor: 'blue',
        width: '60%',
    }
})

*/
/*
import  React, {useState  } from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Image
} from 'react-native';

import Calendar from 'react-native-calendars/src/calendar';

const Calendario_Component = () =>{

    return( 
        <ImageBackground
        source = {require('./../../assets/fondod.png')}
        style = {styles.imageContainer}
        > 
            <View style = {styles.subContenedor}>

                <View style = {styles.encabezado}>
                    <View style = {styles.posicionImagen}>
                        <Image
                            source={require('./../../assets/doc.jpg')}
                            style = {styles.image}
                        />
                    </View>
                    <View style = {styles.informacion}>
                        <Text style = {styles.doctor}>
                            Dr. Joel Martinez
                        </Text>

                        <Text style = {styles.especialidad}>
                            Especialista medico naturista.
                        </Text>

                        <Text style = {styles.fecha}>
                            23 de Mayo 2022
                        </Text>
                    </View>
                </View>

                <View style = {styles.cuerpo}>
                    
                    <View style = {styles.cita}>
                        <Text style = {styles.citaTexto}> 
                            Próxima Cita
                        </Text>
                    </View>

                    <Calendar
                        style = {styles.estilos}
                        onDayPress= {date => {
                        console.log(date)

                    }}
                        onMonthChange = {()=>{}}
                        initialDate={'2022-11-01'}
                        minDate= {'2022-01-01'}
                        maxDate = {'2022-12-31'}

                        markingType = {'period'}
                        markedDates={{
                            '2022-11-01': {startingDay: true, endingDay: true, color: '#bce680'}
                        }}
                    />

                    <View style = {styles.cita}>
                        <Image
                            source={require('./../../assets/fondod.png')}
                            style = {styles.imageHora}
                        />
                    </View>

                </View>

                <View style = {styles.pie}>
                    <TouchableOpacity 
                            style = {styles.botonLogin}
                        >
                            <Text style = {styles.textoButon}>
                                Solicitar Nueva Cita
                            </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    estilos:{
        borderRadius: 15, 
        elevation: 5, 
        margin: 10,
        marginTop: -10,
    },
    subContenedor:{
        backgroundColor: '#ffff',
        width: '95%',
        height: '95%',
        borderRadius: 40,
    },

    imageContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        elevation: 4, 
    },

    encabezado: {
        backgroundColor: 'green',
        width: '100%',
        height: '20%',
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    cuerpo: {
        //backgroundColor: 'blue',
        marginTop: 20,
        width: '100%',
        height: '65%',
        borderRadius: 40,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    pie:{
        width: '100%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textoButon:{
        color: 'white',
        fontSize: 20,
        fontWeight:'bold',
       },
    
       botonLogin:{
        backgroundColor: 'green',
        marginTop: 20,
        width: '70%',
        height: 45,
        borderRadius: 25,
        alignItems:'center',
        justifyContent: 'center',
       },

       posicionImagen: {
        //backgroundColor: 'black',
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center'
       },

       informacion: {
       // backgroundColor: 'purple',
        width: '65%',
        justifyContent: 'center'
       },

       image:{
        width: 110,
        height: 110,
        resizeMode: 'cover',
        borderColor: 'white',
        borderRadius: 60,
        borderWidth: 3
    },

    doctor: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },

    especialidad: {
        color: 'white',
        fontSize: 15,
        marginTop: 10
    },

    fecha: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10
    },

    cita:{
        //backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 10
    },
    citaTexto: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'green'
    },

    imageHora: {
        width: 260,
        height: 30,
        marginTop: -20
    }
})

export default Calendario_Component;*/

import Icon from 'react-native-vector-icons/Ionicons';

const App = (props) => {

    const {list} = props;

    return(
        
        <View style = {styles.efectoSuperior}>

            <FlatList
                    data = {list}
                    ListEmptyComponent = {() => <Text>Componente de texto</Text>}
                    renderItem = {
                        ({item}) => <Element item = {item}/>
                    }
                />

        </View>
    )
}


const Element =(props) => {

    const { item } = props;
    
    return(
        
        <View style = {styles.container}>
            <View style = {styles.tamaño}>
                <View style = {styles.procentaje1}>
                    <Image
                        source = {{ uri: item.imagenProducto}}
                        style = {styles.posterImage}
                    />   
                </View>

                <View style = {styles.procentaje2}>

                    <Text style = {styles.nombreP}> 
                        {item.nombre} 
                    </Text>    
                    <Text style = {styles.descripcion}> 
                        {item.descripcionProducto} 
                    </Text> 

                    <View  style = {styles.direccion}>
                        <View style = {styles.direccion}>
                            <Text style = {styles.precio}> 
                                Precio:   
                            </Text> 
                            <View style = {{width: 5}}/>
                            <Text style = {styles.descripcion}> 
                                C${item.precio} 
                            </Text> 
                        </View>
                        
                        <View style = {styles.direccion}> 

                            <TouchableOpacity>
                                <View style = {styles.fondocircle}>
                                    <Icon name= 'cart' size={20} color={'#fff'}></Icon>
                                </View> 
                            </TouchableOpacity>
                           
                            <View style = {{width: 5}}/>

                            <TouchableOpacity>
                                <View style = {styles.fondocircle}>
                                    <Icon name= 'share-social' size={20} color={'#fff'}></Icon>
                                </View>
                             </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style = {{height: 5}}/>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        marginTop: 2,
        width: '100%',
        alignItems: 'center'
    },
    tamaño:{
        width: '95%',
        backgroundColor: '#fff',
        height: 200,
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    posterImage: {
        width: '100%',
        height: 180,
        borderRadius: 15,
        resizeMode: 'contain',
    },
    procentaje1: {
        width: '40%',
        height: 90,
        //backgroundColor: 'red'
    },
    procentaje2: {
        width: '57%',
        height: 180,
        //backgroundColor: 'red',
        justifyContent: 'space-between'
    },
    direccion: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nombreP:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#102d3b',
        marginTop: 10
    },
    descripcion:{
        fontSize: 15,
        color: '#102d3b'
    },
    precio:{
        fontSize: 15,
        color: '#102d3b',
        fontWeight: 'bold'
    },
    fondocircle:{
        height: 35,
        width: 35,
        backgroundColor: '#3a7456',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    }
})


export default App;