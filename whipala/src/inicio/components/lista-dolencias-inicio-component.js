import React from 'react';

import {
    StatusBar,
    StyleSheet,
    View,
    FlatList,
    Image,
    Dimensions,
    SafeAreaView,
    Animated,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import Publicaciones from './../containers/lista-publiciones-container';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ANCHO_LATERAL = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = heigth * 0.5;

const BackDrop = ({scrollX, imagenes}) => {
    return(
        <View 
            style = {
                (
                    [{
                    height: ALTURA_BACKDROP,
                    width,
                    position: 'absolute',
                    top: 0,
                    }],
                    StyleSheet.absoluteFillObject
                )
            }
        >
            {
                imagenes.map((imagen, key) => {
                    const inputRange = [
                        (key - 1) * ANCHO_CONTENEDOR,
                        key * ANCHO_CONTENEDOR,
                        (key + 1) * ANCHO_CONTENEDOR,
                    ];

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0],
                    });

                    return (
                        <View>
                            <Animated.Image
                                key={key}
                                source={{ uri: imagen.imagenDolencia }}
                                    style={[
                                        { 
                                            width: width, 
                                            height: ALTURA_BACKDROP,
                                            opacity,
                                        },
                                    StyleSheet.absoluteFillObject,
                                ]}
                            />
                    </View>
                    );
                })
            }

            <LinearGradient
                colors={['transparent', '#f7f5fc']}
                style = {styles.degradado}
            />
        </View>
    );
}

const ListaDolencia = (props) => {

    const {data, navigateDolencia, dataT, navigatePlantas} = props;

    const scrollX = React.useRef(new Animated.Value(0)).current;

    return(
        <ScrollView>
        <SafeAreaView style = {styles.container}>

            <BackDrop 
                scrollX = { scrollX }
                imagenes = {data}
            />
        
            <StatusBar hidden />
            
            <Animated.FlatList
                //Propiedades de Animaciones
                onScroll = { Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}

                //Propiedades del FlatList
                data  = {data}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                contentContainerStyle = {style = styles.content}
                decelerationRate = { 0 }
                snapToInterval = { ANCHO_CONTENEDOR }
                scrollEventThrottle = { 16 }
                keyExtractor={(item, index) => index.toString()} 
                renderItem = {
                    ({item, index}) => {

                        const inputRange = [
                            (index - 1) * ANCHO_CONTENEDOR,
                             index * ANCHO_CONTENEDOR,
                            (index + 1) * ANCHO_CONTENEDOR,
                        ];

                        const outputRange = [0, -50, 0];
                        
                        const translateY = scrollX.interpolate({
                            inputRange,
                            outputRange,
                        });


                        return  <View style = {styles.containerElement}>
                                <TouchableOpacity
                                    onPress = {() => { navigateDolencia(item); }}
                                >
                                        <Animated.View 
                                            style = {{
                                                marginHorizontal: ESPACIO,
                                                padding: 7,
                                                borderRadius: 34,
                                                backgroundColor: '#f7f5fc',
                                                alignItems: 'center',
                                                transform: [{ translateY}],
                                            }}
                                        >
                                            
                                            <Image
                                                source = {{ uri: item.imagenDolencia }}
                                                style = {styles.posterImage}
                                            />
                                            <Text
                                                style = {styles.titulo}
                                            >
                                                {item.titulo}
                                            </Text>
                                        </Animated.View>
                                    </TouchableOpacity>
                                </View>
                    }
                }
            />

            
        </SafeAreaView>


        <View style = {styles.fondoFlatList}>

            <Text
                style = {styles.indicador}
            >
                Plantas Medicinales
            </Text>

            <View >              
                <FlatList
                    data = {dataT}
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    ListEmptyComponent = {() => <Text>Componente de texto</Text>}
                    keyExtractor={(item, index) => index.toString()} 
                    renderItem = {
                        ({item}) => <Elemento item = {item} onPress = {() => { navigatePlantas(item); }}/>
                    }
                    ItemSeparatorComponent = {() => <View style = {styles.separador}/>}
                />
            </View>
        </View>

        <Publicaciones/>
        </ScrollView>
    )
}

const Elemento = ( props ) => {

    const { item, onPress } = props;
    
    return(

        <TouchableOpacity
             onPress={onPress}
        >
        
            <View style = {styles.fondo}>

                <View style = {styles.fondoLista}>

                    <Image
                        source = {{uri: item.imagenPlanta}}
                        style = {styles.fondoseccion}
                    /> 
                    
                    <View style = {styles.margen}>

                    <View style = {styles.efecto}>
                        </View>
                            <Text style = {styles.info}>{item.titulo}</Text>
                        </View>
                    <View style = {styles.separadorFin}/>

                </View>

            </View>

        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({

    //Primera seccion
    container: {
        //flex: 1,
        //backgroundColor: '#102d3b',
        backgroundColor: '#f7f5fc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    posterImage:{
        width:'100%',
        height: ANCHO_CONTENEDOR * 1.2,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },

    //Seccion del FlatList

    containerElement:{
        width: ANCHO_CONTENEDOR,
    },
    content:{
        paddingTop: 200,
        paddingHorizontal: ANCHO_LATERAL,
    },
    titulo:{
        color: '#102d3b',
        fontSize: 20,
        fontWeight: 'bold'
    },

    //Estilos de BackDrop
    imagenFondo:{
        height: ALTURA_BACKDROP,
        width,
        position: 'absolute',
        top: 0,
    },

    degradado: {
        height: ALTURA_BACKDROP,
        width,
        position: 'absolute',
        top: 0,
    },

    fondo: {
        alignItems: 'center',
        marginTop: 10,
    },

    fondoLista: {
        width: '100%',
    },

    fondoseccion: {
        width: 250,
        height: 200,
        borderRadius: 20,
        //borderWidth: 3,
        //borderColor: '#3b6376'
    },

    separador: {
        width: 15
    },

    fondoFlatList:{
        flex: 1,
        padding: 10,
        backgroundColor: '#f7f5fc'
    },   
    efecto:{
        backgroundColor: 'black',
        width: 250,
        height: 45,
        opacity: 0.5,
        marginTop: 2,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },

    separadorFin:{
        height: 25
    },
    margen:{
        marginTop: -48
    },
    info:{
        color: 'white', 
        fontSize: 20, 
        fontWeight: 'bold',          
        marginTop: -38, 
        marginLeft: 15
    },
    indicador:{
        color: '#102d3b',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default ListaDolencia;