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
    TouchableOpacity
} from 'react-native';

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
                imagenes.map((imagen, index) => {
                    const inputRange = [
                        (index - 1) * ANCHO_CONTENEDOR,
                        index * ANCHO_CONTENEDOR,
                        (index + 1) * ANCHO_CONTENEDOR,
                    ];

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0],
                    });

                    return (
                        <View>
                            <Animated.Image
                                key={index}
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
                colors={['transparent', '#102d3b']}
                style = {styles.degradado}
            />
        </View>
    );
}

const ListaDolencia = (props) => {

    const {data} = props;

    const scrollX = React.useRef(new Animated.Value(0)).current;

    return(
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
                keyExtractor = {(item) => item.key}
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
                                <TouchableOpacity>
                                        <Animated.View 
                                            style = {{
                                                marginHorizontal: ESPACIO,
                                                padding: 7,
                                                borderRadius: 34,
                                                backgroundColor: '#102d3b',
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
    )
}

const styles = StyleSheet.create({

    //Primera seccion
    container: {
        flex: 1,
        backgroundColor: '#102d3b',
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
        color: '#fff',
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
    }
})

export default ListaDolencia;