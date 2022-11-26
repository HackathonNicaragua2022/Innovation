import React from 'react';

import {
    View,
    Text,
    Button,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Pantalla1 = (props) => {

    const { data, navegar, cambiarText, nombre } = props;
 
    return (

        <ScrollView style = {styles.fondoFlatList}>

            <View style = {styles.efectoSuperior}>
                <Text
                    style = {styles.indicador}
                >
                    {data.title}
                </Text>

            </View>

            <TouchableOpacity
                title='Ir a pantalla 1'
                onPress={
                    () => {
                        navegar('pantalla1');
                    }
                }
            >
                <View style = {styles.fondoButton}>
                    <Icon name= 'arrow-back-outline' size={20} color={'#3a7456'}></Icon>
                </View>
            </TouchableOpacity>
            <   TextInput
                    onChangeText={cambiarText}
                    defaultValue={nombre}
                />
            <View style = {{height: 15}}/>

            <View style = {
                {
                    //backgroundColor: 'red', 
                    height: 620, 
                    width: '100%', 
                    padding: 10
                }
            }> 

                <View style = {styles.cont}>

                    <View style = {{
                        width: '100%',
                        alignItems: 'center',
                    }}>
                        <Image
                            source = {{uri: data.imagenDescrip}}
                            style = {styles.posterImagen}
                        />
                    </View>

                    <View>
                        <Text style = {styles.descripcion}>
                            {data.descrip}
                        </Text>
                    </View>
                </View>
                
            </View>
        </ScrollView>        
    );

};


const styles = StyleSheet.create({
    fondo: {
        alignItems: 'center',
        marginTop: 10,
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
    efectoSuperior:{
        backgroundColor: '#60be8c',
        height: 110,
        borderRadius: 35,
        marginTop: -25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fondoButton: {
        backgroundColor: '#f7f5fc',
        height: 35,
        width: 35,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -59,
        marginLeft: 7
    },
    posterImagen:{
        height: 300,
        width: 300,
        resizeMode: "cover",
    },
    cont:{
        width: '100%',
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    descripcion: {
        color:'#102d3b',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 30,
        marginTop: 20
    },
    sub:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})


export default Pantalla1;