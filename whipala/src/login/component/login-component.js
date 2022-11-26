import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput
} from 'react-native'

const Login = () => {

    return(
        <ScrollView>
            <View style = {styles.container}>
                <View style = {styles.header}>

                </View>

                <View style = {styles.cuerpo}>

                    <View style = {styles.textImput}>

                        <TextInput
                            style = {styles.letterImput}
                            placeholder = 'Correo electronico'
                            autoCompleteType = 'email'
                        />

                    </View>

                    <View style = {styles.textImput}>

                        <TextInput
                            style = {styles.letterImput}
                            placeholder = 'Correo electronico'
                            autoCompleteType = 'email'
                        />

                        </View>
                </View>

                <View style = {styles.pie}>
                    <TouchableOpacity>
                        <View style ={styles.caja}>
                            <Text style ={styles.info}>
                                Ingresar
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View style = {styles.separador}/>

                    <TouchableOpacity>
                        <View style ={styles.caja}>
                            <Text style ={styles.info}>
                                Ingresar
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f7f5fc',
        height: '100%',
        width: '100%',
        padding: 10,
        justifyContent: 'center'
    },
    header:{
        //backgroundColor: 'green',
        width: '100%',
        height: 250,
    },
    cuerpo:{
        width: '100%',
        height: 350,
        //backgroundColor: 'purple',
        alignItems: 'center'
    },
    pie: {
        width: '100%',
        height: 200,
        alignItems: 'center'
    },
    caja:{
        width: 250,
        height: 50,
        backgroundColor: '#60be8c',
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    info:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    separador: {
        height: 20
    },
    textImput:{
        backgroundColor: 'white',
        width: '90%',
        height: 50,
        borderRadius: 50,
        marginTop: 5,
        paddingLeft: 8,
        borderColor: '#60be8c',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        resizeMode: 'cover',
    },

    letterImput:{
        color: '#000'
    }
})
export default Login;