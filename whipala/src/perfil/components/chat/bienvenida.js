import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

const App = (props) => {
    const {onPress} = props;
    return(
        <ScrollView style = {styles.container}>
            <View style = {styles.fondo}>
                
                <Image
                    source = {require('./../../../assets/bannerchat.jpg')}
                    style = {styles.image}
                />

                <View style = {styles.posicion}>
                    <Text style = {styles.titulo}>
                        Hola como estas?
                    </Text>

                    <Text style = {styles.info}>
                        En que podemos ayudarte.....
                    </Text>
                </View>
            </View>

            <View style = {styles.car}>
                <View style = {styles.car2}>

                    <TouchableOpacity
                        onPress={onPress}
                    >
                        <View style = {styles.but}>

                        </View>
                    </TouchableOpacity>
                </View>
            </View>

           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    fondo:{

        height: 350,
        width: '100%'
    },
    image:{
        height: 300,
        width: '100%',
    },
    posicion: {
        marginTop: -150,
        marginLeft: 20
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    info: {
        color: '#000',
        fontSize:18
    },

    car: {
        width: '100%',
        height: 250,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    car2: {
        width: '90%',
        height: '90%',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: '#60be8c',
        backgroundColor: '#fff'
    },
    but:{
        backgroundColor: 'green',
        height: 50,
        width: 250,
        borderRadius: 30
    }
})

export default App;