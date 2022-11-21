import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Image,
    Touchable
} from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';

const PublicacionesInicio = (props) => { 

    const { data } = props;

    return(
        <SafeAreaView style = {styles.fondoFlatList}>

            <Text
                style = {styles.indicador}
            >
                Descubre
            </Text>

            <View >              
                <FlatList
                    data = {data}
                    horizontal = {true}
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
        borderWidth: 3,
        borderColor: '#3b6376'
    },

    separador: {
        width: 15
    },

    fondoFlatList:{
        flex: 1,
        padding: 10,
        backgroundColor: '#102d3b'
    },   
    efecto:{
        backgroundColor: 'black',
        width: 242,
        height: 45,
        opacity: 0.5,
        marginTop: 0,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: 5,
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
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default PublicacionesInicio;