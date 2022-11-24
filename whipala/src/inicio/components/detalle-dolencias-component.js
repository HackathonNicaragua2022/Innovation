import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ScrollView
} from 'react-native';

import SliderCont from './../containers/slider-container';

const DetalleDolencia = (props) =>{

    const {data, navegar, cambiarText, nombre } = props;

    return(
        <ScrollView>
            <View style = {styles.containerFondo}>
                <SliderCont/>

                <View style = {styles.container}>
                    <View style = {styles.anchoTitle}>
                        <Text style = {styles.tituloF}>{data.title}</Text>
                    </View>

                    <TextInput
                        onChangeText={cambiarText}
                        defaultValue={nombre}
                        style = {{marginTop: -10}}
                    />

                    <View style = {styles.filas}>
                        <View style = {styles.columnas}>
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            navegar('pantalla2');
                                        }
                                    }
                                >
                                    <View style = {styles.cuadro}>
                                        <Text style = {styles.info}>Definición</Text>
                                    </View>

                            </TouchableOpacity>
                        </View>

                        <View style = {styles.columnas}>
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            navegar('pantalla3');
                                        }
                                    }
                                >
                                    <View style = {styles.cuadro}>
                                        <Text style = {styles.info}>Síntomas</Text>
                                    </View>

                            </TouchableOpacity>
                        </View>

                        <View style = {styles.columnas}>
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            navegar('pantalla4');
                                        }
                                    }
                                >
                                    <View style = {styles.cuadro}>
                                        <Text style = {styles.info}>Recetas Naturales</Text>
                                    </View>

                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style = {styles.filas2}>
                        <View style = {styles.columnas}>
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            navegar('pantalla5');
                                        }
                                    }
                                >
                                    <View style = {styles.cuadro}>
                                        <Text style = {styles.info}>Prevención</Text>
                                    </View>

                            </TouchableOpacity>
                        </View>

                        <View style = {{width: 20}}/>

                        <View style = {styles.columnas}>
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            navegar('pantalla2');
                                        }
                                    }
                                >
                                    <View style = {styles.cuadro}>
                                        <Text style = {styles.info}>Precaución</Text>
                                    </View>

                            </TouchableOpacity>
                        </View>
        
                    </View>
                </View>

                <View style = {styles.containerFinal}>
                    <View style = {styles.centrado}>
                        <Text style = {styles.infoPie}>
                            ¡Si desea saber más, agende su cita con nuestros especialistas.
                        </Text>
                        <View style = {{height: 15}}/>
                    </View>    
                </View>
                
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f7f5fc',
        width: '95%',
    },
    containerFinal:{
        backgroundColor: '#f7f5fc',
        alignItems: 'center',
        height: 145,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    centrado:{
        width: '90%',
    },
    containerFondo:{
        backgroundColor: '#f7f5fc',
        alignItems: 'center',
    },
    anchoTitle:{
        width: '100%',
        height: 45,
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#60be8c'
    },
    tituloF:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
    },
    infoPie:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#102d3b',
        textAlign: 'center',
        lineHeight: 20
    },
    filas:{
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    filas2:{
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    cuadro: {
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    info: {
        color: '#102d3b',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    columnas: {
        marginTop: 15,
    },
})

export default DetalleDolencia;