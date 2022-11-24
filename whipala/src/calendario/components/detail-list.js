import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import SliderC from './../containers/slider-container';

const App = (props) => {

    const {headers} = props;

    const handleWhat = async ()=> {

        const L = 'https://wa.me/' + headers.whatsApp + '?text=Hola!!!';
        
        Linking.openURL(L);
    }

    const handleTele = async ()=> {

        const L = 'tel:' + headers.telefono ;
        
        Linking.openURL(L);
    }

    const handleCorre = async ()=> {

        const L = 'mailto:' + headers.correoE + '?subject=Asunto Predefinido&body= Hola!!!' ;
        
        Linking.openURL(L);
    }

    return(
        <View style = {styles.container}>
           
            <View style = {styles.containerCenter}>

                <View style = {styles.anchoTitle}>
                    <Text style = {styles.titulo}>{headers.titulo}</Text>
                </View>
                
                <View style = {{height: 20}}/>

                <View style = {{height: 10}}/>

                <TouchableOpacity
                    onPress={handleCorre}
                >
                    <View style = {styles.ancho2}>
                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono2}>
                                <Icon name= 'mail-unread' size={25} color={'#3a7456'}></Icon>
                            </View>
                        </View>
                        
                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                    Correo Electrónico
                            </Text>
                            <Text style = {styles.titulo2}>
                                    {headers.correoE}
                            </Text>
                        </View>

                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono3}>
                                <Icon name= 'chevron-forward-outline' size={20} color={'#3a7456'}></Icon>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style = {{height: 10}}/>

                <TouchableOpacity
                    onPress={handleTele}
                >
                    <View style = {styles.ancho2}>
                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono2}>
                                <Icon name= 'call' size={25} color={'#3a7456'}></Icon>
                            </View>
                        </View>
                        
                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                    Telefono 
                            </Text>
                            <Text style = {styles.titulo2}>
                                    {headers.telefono}
                            </Text>
                        </View>

                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono3}>
                                <Icon name= 'chevron-forward-outline' size={20} color={'#3a7456'}></Icon>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style = {{height: 10}}/>

                <TouchableOpacity
                    onPress={handleWhat}
                >
                    <View style = {styles.ancho2}>
                        <View style = {styles.porcentaje1_1}>
                            <View>
                                <Icon name= 'logo-whatsapp' size={25} color={'#3a7456'}></Icon>
                            </View>
                        </View>
                        
                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                WhatsApp
                            </Text>
                            <Text style = {styles.titulo2}>
                                    {headers.whatsApp}
                            </Text>
                        </View>

                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono3}>
                                <Icon name= 'chevron-forward-outline' size={20} color={'#3a7456'}></Icon>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <Text style = {styles.catalogo}>Catalogo de Productos</Text>
                <View style = {{height: 5}}/>
            </View>

            <SliderC/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    catalogo:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#102d3b',
        marginTop: 30
    },
    containerCenter:{
        width: '95%',
        marginTop: 10
    },
    titulo:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
    },
    ancho:{
        width: '100%',
        height: 100,
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    anchoTitle:{
        width: '100%',
        height: 45,
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#60be8c'
    },
    ancho2:{
        width: '100%',
        height: 60,
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icono2:{
        width: 35,
        height: 35,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icono3:{
        width: 35,
        height: 35,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    porcentaje1_1: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#102d3b'
    },
    titulo2: {
        fontSize: 15,
        color: '#102d3b'
    },
    porcentaje2_1:{
        width: '72%',
        justifyContent: 'center',
    },
})

export default App;

