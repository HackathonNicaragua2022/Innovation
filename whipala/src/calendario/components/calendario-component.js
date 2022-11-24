import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Image,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import IconP from 'react-native-vector-icons/MaterialIcons';
import Encabezado from './../components/encabezado-calendario';

const ListaFarmacia = (props) => { 

    const { data , navigateFarmaciaDetalle, dataTop} = props;

    return(
        <SafeAreaView style = {styles.fondoFlatList}>

            <Encabezado/>

            <Text style = {styles.infor}>Tu próxima cita</Text>

            <View style = {{marginTop: -10}}>              
                <FlatList
                    data = {data}
                    showsHorizontalScrollIndicator = {false}
                    ListEmptyComponent = {() => <Text>Componente de texto</Text>}
                    renderItem = {
                        ({item}) => <Element item = {item} onPress = {() => { navigateFarmaciaDetalle(item); }}/>
                    }
                    ItemSeparatorComponent = {() => <View style = {styles.separador}/>}
                />
            </View>


            <Text style = {styles.infora}>Top de Medicos</Text>

            <View style = {{backgroundColor: '#f7f5fc', height: 400}}>              
                <FlatList
                    data = {dataTop}
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    ListEmptyComponent = {() => <Text>Componente de texto</Text>}
                    renderItem = {
                        ({item}) => <Elemento item = {item} onPress = {() => { navigateFarmaciaDetalle(item); }}/>
                    }
                    ItemSeparatorComponent = {() => <View style = {styles.separadora}/>}
                />
            </View>

            <View style ={{backgroundColor: 'red', height: 50,
        width: 50}}>

            </View>

        </SafeAreaView>

    );

}

const Element = ( props ) => {

    const { item } = props;
    
    return(

        <View style = {styles.fondo}>

            <View style = {styles.fondoLista}>

                <View style = {styles.direccion}>
                    <View style = {styles.porcentaje1}>
                        <View style = {styles.icono}>
                            <Image
                                    source = {{uri: item.avatar}}
                                    style = {styles.estiloImagen}
                            />
                        </View>
                    </View>

                    <View style = {styles.porcentaje2}>
                        <Text style = {styles.titulo}>
                            Dr. {item.nombre}
                        </Text>

                        <View style = {{flexDirection: 'row'}}>
                            <Text style = {styles.etii}>Especialista:</Text>
                            <View style = {{width: 10}}/>
                            <Text style = {styles.eti}>
                                {item.especialista}
                            </Text>
                        </View>

                        <View style = {{flexDirection: 'row'}}>
                            <Text style = {styles.etii}>Fecha</Text>
                            <View style = {{width: 10}}/>
                            <Text style = {styles.eti}>
                                {item.fecha}
                            </Text>
                        </View>

                        <View style = {{flexDirection: 'row'}}>
                            <Text style = {styles.etii}>Hora</Text>
                            <View style = {{width: 10}}/>
                            <Text style = {styles.eti}>
                                {item.hora}
                            </Text>
                        </View>
                                                    
                    </View >

                </View>
               

                <TouchableOpacity style = {{
                        height: 42,
                        width: '100%',
                        alignItems: 'center',
                    }}
                >
                    <View style = {styles.efecto}/>
                    <View style = {{flexDirection: 'row'}}>
                        <View style = {{height: 25, width: 25, marginTop: -34.5}}>
                            <Icon name= 'calendar' size={25} color={'#102d3b'}></Icon>
                        </View>

                        <View style = {{width: 10}}/>
                        
                        <Text style = {styles.etiil}>Ver Calendario</Text>
                    </View>
                   
                </TouchableOpacity>


            </View>

        </View>

    );
}

const Elemento = ( props ) => {

    const { item, onPress } = props;
    
    return(

        <TouchableOpacity
            onPress={ onPress}
        >
        
            <View style = {styles.fondoa}>

                <View style = {styles.fondoListaa}>

                    <View  style = {styles.fondoContainera}>
                            <View>
                                <Image
                                    source = {{ uri: item.avatar }}
                                    style = {{height: 150,
                                    width: 180,
                                    borderRadius: 10,
                                    marginTop: 0}}
                                />
                            </View>

                            <Text style = {styles.titulosa}>
                                {item.nombre}
                            </Text>

                            <Text style = {styles.titulosas}>
                                {item.especialista}
                            </Text>

                            <View style = {styles.estiloIconoLa}>
                                <Icon name={item.skill} size={25} color={'#ebd192'}></Icon>
                                <Icon name={item.skill2} size={25} color={'#ebd192'}></Icon>
                                <Icon name={item.skill3} size={25} color={'#ebd192'}></Icon>
                                <Icon name={item.skill4} size={25} color={'#ebd192'}></Icon>
                                <IconP name={item.skill5} size={25} color={'#ebd192'}></IconP>
                            </View>
                    </View>
                   
                </View>

            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    fondo: {
        alignItems: 'center',
        marginTop: 20,
    },

    fondoLista: {
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        height: 180
    },
    separador: {
        width: 15
    },

    fondoFlatList:{
        backgroundColor: '#f7f5fc'
    },   
    indicador:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    icono:{
        width: 110,
        height: 125,
        backgroundColor: '#c6e0d9',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    direccion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'center',
        height: 140,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#102d3b'
    },
    eti: {
        fontSize: 15,
        color: '#102d3b',
    },
    etii: {
        fontSize: 15,
        color: '#102d3b',
        fontWeight: 'bold',
    },
    etiil: {
        fontSize: 18,
        color: '#102d3b',
        fontWeight: 'bold',
        marginTop: -33
    },
    porcentaje1: {
        width: '30%',
    },
    porcentaje2:{
        width: '68%',
        height: 100,
        justifyContent: 'space-between',
        marginLeft: 10
    },

    efectoSuperior:{
        backgroundColor: '#60be8c',
        height: 110,
        borderRadius: 35,
        marginTop: -25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    estiloImagen:{
        height: '100%',
        width: '100%',
        borderRadius: 10,
    },
    estiloIconoL:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    efecto:{
        backgroundColor: '#60be8c',
        width: '100%',
        height: 40,
        opacity: 0.5,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infor:{
        color: '#102d3b',
        paddingLeft: 12,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 25
    }, //OTRO
    fondoa: {
        alignItems: 'center',
        marginTop: 0,
       // backgroundColor: 'red',
        padding: 10
    },

    fondoListaa: {
        width: 200,
        height: 240,
        backgroundColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },
    fondoContainera: {
        width: '90%',
        height: '90%',
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    estiloIconoLa:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    titulosa:{
        color: '#102d3b', 
        fontSize: 20, 
        fontWeight: 'bold'
    },
    titulosas:{
        color: '#102d3b', 
        fontSize: 16, 
        marginTop: -5
    },
    infora:{
        color: '#102d3b',
        paddingLeft: 12,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 25
    }
})

export default ListaFarmacia;