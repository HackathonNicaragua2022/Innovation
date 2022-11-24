import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking,
    Image
} from 'react-native';


import IconP from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import SliderC from './../containers/slider-container';

const App = (props) => {

    const {headers, listImage} = props;

    return(
        <View style = {styles.container}>
           
            <View style = {styles.containerCenter}>

                <View style = {styles.anchoTitle}>
                    <Image
                        source = {{ uri: headers.fond}}
                        style = {styles.posterImage}
                    />  
                    
                </View>

                <View style = {{//backgroundColor: 'red', 
                                    flexDirection: 'row'
                               }}>
                    <Image
                        source = {{ uri: headers.avata}}
                        style = {styles.ava}
                    /> 
                    <View>
                        <Text style = {styles.titulo0}>
                            Dr. {headers.titulo}
                        </Text>

                        <View style = {styles.estiloIconoLa}>
                                <Icon name={headers.skill} size={20} color={'#ebd192'}></Icon>
                                <Icon name={headers.skill2} size={20} color={'#ebd192'}></Icon>
                                <Icon name={headers.skill3} size={20} color={'#ebd192'}></Icon>
                                <Icon name={headers.skill4} size={20} color={'#ebd192'}></Icon>
                                <IconP name={headers.skill5} size={20} color={'#ebd192'}></IconP>
                            </View>
                    </View>
                                         
                </View>

                
                
                <View style = {{height: 20}}/>

                <View style = {{height: 10}}/>


                    <View style = {styles.ancho2}>
                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono2}>
                                <Icon name= 'man' size={25} color={'#3a7456'}></Icon>
                            </View>
                        </View>
                        
                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                    Especialista
                            </Text>
                            <Text style = {styles.titulo2}>
                                    {headers.especial}
                            </Text>
                        </View>

                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono3}>
                                
                            </View>
                        </View>
                    </View>
    

                <View style = {{height: 10}}/>

                    <View style = {styles.ancho2}>
                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono2}>
                                <Icon name= 'school' size={25} color={'#3a7456'}></Icon>
                            </View>
                        </View>
                        
                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                    Educación 
                            </Text>
                            <Text style = {styles.titulo2}>
                                    {headers.educac}
                            </Text>
                        </View>

                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono3}>
                                
                            </View>
                        </View>
                    </View>


                <View style = {{height: 10}}/>

                    <View style = {styles.ancho3}>
                        <View style = {styles.porcentaje1_1}>
                            <View>
                                <Icon name= 'map' size={25} color={'#3a7456'}></Icon>
                            </View>
                        </View>
                        
                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                Dirección
                            </Text>
                            <Text style = {styles.titulo2}>
                                    {headers.direc}
                            </Text>
                        </View>

                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono3}>
                                
                            </View>
                        </View>
                    </View>

                    <View style = {{height: 10}}/>

                    
                    <View style = {styles.ancho3}>
                        <View style = {styles.porcentaje1_1}>
                            <View>
                                <Icon name= 'newspaper' size={25} color={'#3a7456'}></Icon>
                            </View>
                        </View>
                        
                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                Descripción
                            </Text>
                            <Text style = {styles.titulo2}>
                                    {headers.descrip}
                            </Text>
                        </View>

                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono3}>
                                
                            </View>
                        </View>
                    </View>

                    <View style = {{height: 10}}/>

                    <View style = {styles.ancho4}>
                        <View style = {styles.porcentaje1_1}>
                            <View>
                                <Icon name= 'briefcase' size={25} color={'#3a7456'}></Icon>
                            </View>
                        </View>
                        
                        <View style = {styles.porcentaje2_1}>
                            <Text style = {styles.titulo1}>
                                Servicios
                            </Text>
                            <View style = {{marginLeft: 10}}>
                                <Text style = {styles.titulo2}>
                                        - {headers.servicio_1}
                                </Text>
                                <Text style = {styles.titulo2}>
                                        - {headers.servicio_2}
                                </Text>
                                <Text style = {styles.titulo2}>
                                        - {headers.servicio_3}
                                </Text>
                            </View>
                           
                        </View>

                        <View style = {styles.porcentaje1_1}>
                            <View style = {styles.icono3}>
                                
                            </View>
                        </View>
                    </View>

                    <View style = {{height: 10}}/>
            </View>

            <SliderC 
                listImage = {listImage}
            />
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
        width: '105%',
        height: 220,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -10,
        backgroundColor: '#60be8c',
        marginLeft: -10
    },
    ancho2:{
        width: '100%',
        height: 60,
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ancho3:{
        width: '100%',
        height: 90,
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ancho4:{
        width: '100%',
        height: 110,
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
    titulo0: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#102d3b',
        marginLeft: 5,
        flexDirection: 'column'
    },
    titulo2: {
        fontSize: 15,
        color: '#102d3b'
    },
    porcentaje2_1:{
        width: '72%',
        justifyContent: 'center',
    },
    posterImage: {
        width: '100%',
        height: '100%'
    },
    ava: {
        width: 125,
        height: 125,
        borderWidth: 5,
        borderRadius: 100,
        position: 'relative',
        marginTop: -65,
        borderColor: '#f7f5fc'
    },
    estiloIconoLa:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 130,
        height: 25,
        marginLeft: 5
    },
})

export default App;

