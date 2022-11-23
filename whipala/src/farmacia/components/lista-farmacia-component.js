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

import Icon from 'react-native-vector-icons/MaterialIcons';
import Encabezado from './../components/encabezajo-farmacia';
import Lista from './../container/lista-farmacia-top-container';

const ListaFarmacia = (props) => { 

    const { data , navigateFarmaciaDetalle} = props;

    return(
        <SafeAreaView style = {styles.fondoFlatList}>

            <Encabezado/>

            <Lista/>

            <Text style = {styles.infor}>Farmacias</Text>

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
        </SafeAreaView>

    );

}

const Element = ( props ) => {

    const { item, onPress } = props;
    
    return(

        <TouchableOpacity
            onPress={onPress}
        >
        
            <View style = {styles.fondo}>

                <View style = {styles.fondoLista}>

                    <View style = {styles.direccion}>
                        <View style = {styles.porcentaje1}>
                            <View style = {styles.icono}>
                                <Image
                                     source = {{uri: item.imageFarmacia}}
                                     style = {styles.estiloImagen}
                                />
                            </View>
                        </View>

                        <View style = {styles.porcentaje2}>
                            <Text style = {styles.titulo}>
                                {item.titulo}
                            </Text>

                            <Text style = {styles.eti}>
                                {item.descripcion}
                            </Text>
                            
                            <View style = {styles.estiloIconoL}>
                                <Icon name={item.skill} size={25} color={'#ebd192'}></Icon>
                                <Icon name={item.skill2} size={25} color={'#ebd192'}></Icon>
                                <Icon name={item.skill3} size={25} color={'#ebd192'}></Icon>
                                <Icon name={item.skill4} size={25} color={'#ebd192'}></Icon>
                                <Icon name={item.skill5} size={25} color={'#ebd192'}></Icon>
                            </View>
                            
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
        height: 140
        //backgroundColor: 'blue'
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
    porcentaje1: {
        width: '30%',
    },
    porcentaje2:{
        width: '68%',
        height: 120,
        justifyContent: 'space-between'
    },
    efectoSuperior:{
        backgroundColor: '#60be8c',
        height: 110,
        borderRadius: 35,
        marginTop: -25,
        alignItems: 'center',
        justifyContent: 'center'
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
    infor:{
        color: '#102d3b',
        paddingLeft: 12,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 25
    }
})

export default ListaFarmacia;