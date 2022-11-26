import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import Calendar from 'react-native-calendars/src/calendar';

const App = (props) => {
    const {data} = props;
    return(
        <View style = {styles.container}>
            <View style = {styles.contenedor1}>
                <View style = {styles.efectoSuperior}>
                    <Text
                        style = {styles.indicador}
                    >
                        Calendario
                    </Text>
                </View>

            </View>
           
           <View style = {styles.contenedor2}>
                <View style = {styles.car}>
                    <View style = {styles.contenedorImagen}>
                        <Image
                            source = {{ uri: data.avatar}}
                            style = {styles.avatarC}
                        />

                    </View >
                    <View style = {styles.contenedorInformacion}>
                        <Text style = {{color: '#102d3b', fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
                            {data.titulo}
                        </Text>

                        <Text style = {{color: '#102d3b', fontSize: 16,}}>
                            {data.especialista}
                        </Text>

                        <View style = {{flexDirection: 'row'}}>
                            <Text style = {{color: '#102d3b', fontSize: 16, fontWeight: 'bold'}}>
                                Fecha:
                            </Text>

                            <View style = {{width: 10}}/>

                            <Text style = {{color: '#102d3b', fontSize: 16, fontWeight: 'normal'}}>
                                {data.fecha}
                            </Text>

                        </View>

                        <View style = {{flexDirection: 'row'}}>
                            <Text style = {{color: '#102d3b', fontSize: 16, fontWeight: 'bold'}}>
                                Hora:
                            </Text>

                            <View style = {{width: 10}}/>

                            <Text style = {{color: '#102d3b', fontSize: 16, fontWeight: 'normal'}}>
                                {data.hora}
                            </Text>

                        </View>

                        <Text style = {{color: '#102d3b', fontSize: 16, fontWeight: 'normal'}}>
                            {data.direc}
                        </Text>
                        
                    </View>
                    
                  
                </View>
                
           </View>

           <View style = {styles.contenedor3}>
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
                        '2022-11-26': {startingDay: true, endingDay: true, color: '#bce680'}
                    }}
                />

                <Text style = {{color:'#000', marginTop: 35, fontSize: 15}}>
                    Whipala simpre pensando en ti!!!
                </Text>
           </View>


        </View>
    )
}

const styles = StyleSheet.create({
    efectoSuperior:{
        backgroundColor: '#60be8c',
        height: 110,
        borderRadius: 35,
        marginTop: -25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    indicador:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    container: {
        flex: 1
    },
    contenedor1:{
        //backgroundColor: 'red',
        width: '100%',
        height: '12%'
    },
    contenedor2:{
        //backgroundColor: 'blue',
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contenedor3:{
        //backgroundColor: 'yellow',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -30
    },
    estilos:{
        width: 380,
        borderRadius: 15
    },
    car:{
        width: '95%',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 200,
        alignItems: 'center',
        padding: 10,
        borderRadius: 15
    },
    avatarC:{
        height: 180,
        width: '100%',
        borderRadius: 20,
        resizeMode: 'cover'
    },
    contenedorImagen:{
        width: '40%',
        //backgroundColor: 'green'
    },
    contenedorInformacion: {
        width: '60%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 200,
        borderRadius: 10,
        padding: 15,
    }
})
export default App;