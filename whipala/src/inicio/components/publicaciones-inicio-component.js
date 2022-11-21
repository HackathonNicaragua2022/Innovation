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
                        source = {{uri: item.imagenPublicacion}}
                        style = {styles.fondoseccion}
                    />

                   
                </View> 

                <View style = {styles.contenedorTexto}>
                        <View style = {styles.contenedor}>
                            <Text style = {styles.titulo}>
                                 {item.titulo}
                            </Text>
                            <View style = {styles.div}/>
                            <Text style = {styles.descripcion}>
                                {item.descripcionTitulo}
                            </Text>
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
        width: '100%',
    },

    fondoLista: {
        width: '100%',
        //backgroundColor: 'red',
        height: 300
    },

    fondoseccion: {
        width: '100%',
        height: 250,
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
        backgroundColor: '#f7f5fc',
    },   
    indicador:{
        color: '#102d3b',
        fontSize: 25,
        fontWeight: 'bold'
    },
    contenedorTexto:{
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: -150,
        height: 100,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedor:{
        width: '95%',
        //backgroundColor: 'green'
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#102d3b',
    },
    descripcion:{
        fontSize: 15,
        color: '#102d3b'
    },
    div:{
        height: 5
    },
})

export default PublicacionesInicio;