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

const ListaNotificacion = (props) => { 

    const { data } = props;

    return(
        <SafeAreaView style = {styles.fondoFlatList}>

            <View style = {styles.efectoSuperior}>
                <Text
                    style = {styles.indicador}
                >
                    Notificaciones
                </Text>
            </View>

            <View style = {{height: 15}}/>

            <View >              
                <FlatList
                    data = {data}
                    showsHorizontalScrollIndicator = {false}
                    ListEmptyComponent = {() => <Text>Componente de texto</Text>}
                    renderItem = {
                        ({item}) => <Element item = {item}/>
                    }
                    ItemSeparatorComponent = {() => <View style = {styles.separador}/>}
                />
            </View>
        </SafeAreaView>

    );

}

const Element = ( props ) => {

    const { item } = props;
    
    return(

        <TouchableOpacity>
        
            <View style = {styles.fondo}>

                <View style = {styles.fondoLista}>

                    <View style = {styles.direccion}>
                        <View style = {styles.porcentaje1}>
                            <View style = {styles.icono}>
                                <Icon name={item.icono} size={25} color={'#3a7456'}></Icon>
                            </View>
                        </View>

                        <View style = {styles.porcentaje2}>
                            <Text style = {styles.titulo}>
                                {item.titulo}
                            </Text>

                            <Text style = {styles.eti}>
                                {item.etiqueta}
                            </Text>
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
        marginTop: 10,
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
        flex: 1,
        backgroundColor: '#f7f5fc'
    },   
    indicador:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    icono:{
        width: 60,
        height: 60,
        backgroundColor: '#c6e0d9',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    direccion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'center',
        height: 100
        //backgroundColor: 'blue'
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#102d3b'
    },
    eti: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#102d3b',
        textDecorationLine: 'underline'
    },
    porcentaje1: {
        width: '20%'
    },
    porcentaje2:{
        width: '80%',
    },
    efectoSuperior:{
        backgroundColor: '#60be8c',
        height: 110,
        borderRadius: 35,
        marginTop: -25,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ListaNotificacion;