import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Image
} from 'react-native'

const ListaDolencias = (props) => { 

    const { data } = props;

    return(
         
        <SafeAreaView style = {styles.fondoFlatList}>
            <View >              
                <FlatList
                    data = {data}
                    horizontal
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
        
        <View style = {styles.fondo}>

            <View style = {styles.fondoLista}>

                <Image
                    source = {item.imagen}
                    style = {styles.fondoseccion}
                /> 
            </View>

            <View style = {styles.direccion}>
                <View style = {styles.iconoFondo}>
                    <View style = {styles.fondoIcono}>
                        <Image
                            source = {item.icono}
                            style = {styles.iconoEstilo}
                        />
                    </View>
                </View>

                <View style = {styles.informacion}>
                    <Text  style = {styles.titulo}>
                        {item.enfermedad}
                    </Text>
                </View>
            </View>

        </View>
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
        width: 350,
        height: 250,
        borderRadius: 20
    },

    separador: {
        width: 15
    },
    fondoFlatList:{
        flex: 1,
        padding: 5
    },

    direccion:{
        width: 350,
        height: 60,
        marginTop: -60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    iconoFondo:{
        width: '20%',
    },

    informacion: {
        width: '80%',
        alignContent: 'center',
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: -5
    },
    
    fondoIcono:{
        backgroundColor: '#282840',
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconoEstilo: {
        width: 40,
        height: 40
    }
})

export default ListaDolencias;