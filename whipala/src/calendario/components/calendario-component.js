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
        source = {require('./../../assets/fondo.png')}
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
                            source={require('./../../assets/Hora.png')}
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

export default Calendario_Component;