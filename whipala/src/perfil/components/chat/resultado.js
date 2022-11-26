import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

const App = () => {

    return(
        <ScrollView style = {styles.container}>

            <View style = {styles.efecto}>
                <View style = {styles.title}>
                    <Text style = {styles.titulo}>
                        Dolor de cabeza
                    </Text>

                    <View style = {styles.separador}/>

                    <Text style = {styles.info}>
                        Estamos aquí para ayudarte...
                    </Text>
                </View>

                <View style = {styles.fondoImage}>
                    <Image
                        source = {require('./../../../assets/dolor.png')}
                        style = {styles.image}
                    />
                </View>
                
            </View>

            <View style = {{
                justifyContent: 'space-between',
                height: 460,
                width: '100%',
            }}>
                

                <View style = {styles.fondoChat2}>

                    <View style = {styles.buton2}>
                        <Text style = {styles.infoChat2}>
                            Dolor de Cabeza
                        </Text>
                    </View>
                    <View style = {styles.separadorChat}/>
                    
                </View>

                <View style = {styles.fondoChat3}>

                    <View style = {styles.fondoChat4}>
                        <View>
                            <Text style = {styles.titleResultado}>
                                Jugo para dolor de cabeza
                            </Text>
                        </View>
                        
                        <Text style = {styles.subtitle}>
                            Ingredientes
                        </Text>

                        <View style = {styles.contenido}>
                            <Text style = {styles.infoChat2}>
                               - 1 Manzana
                            </Text>
                            <Text style = {styles.infoChat2}>
                               - 1 Pepino
                            </Text>
                            <Text style = {styles.infoChat2}>
                               - 2 centimetros de jengibre
                            </Text>
                        </View>

                        <Text style = {styles.subtitle}>
                            Beneficios
                        </Text>

                        <View style = {styles.contenido2}>
                            <Text style = {styles.infoChat2}>
                                1. Produce un efecto relajante y tiene propiedades antiinflamatoria
                            </Text>

                            <View style = {{height: 10}}/>

                            <Text style = {styles.infoChat2}>
                                2. Preparación
                            </Text>

                            <View style = {{height: 10}}/>

                            <Text style = {styles.infoChat2}>
                                3. Licuar tomos los ingredientes y tomar 3 veces por semana.
                            </Text>
                            <View style = {{height: 10}}/>
                        </View>
                        
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f7f5fc'
    },
    efecto: {
        backgroundColor: '#60be8c',
        width: '100%',
        height: 300,
        borderRadius: 35,
        marginTop: -50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    info: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'normal'
    },
    title:{
        width: '90%',
        height: 70,
        //backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 50
    },
    fondoImage:{
        //backgroundColor: 'green',
        width: '90%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 120,
        height: 120
    },
    fondoChat:{
        height: 500,
        width: '100%',
        alignItems: 'flex-end',
        padding: 10,
    },
    buton: {
        width: 250,
        height: 45,
        backgroundColor: '#e6f6cf',
        borderRadius: 40,
        alignContent: 'center',
        justifyContent:'center',
    },
    infoChat: {
        color: '#000',
        marginLeft: 20,
        fontSize: 15
    },
    
    ayuda: {
        height: 30,
        width: '100%',
        alignItems: 'flex-end',
        marginTop: 10
    },
    infoAyuda: {
        color: '#000',
        fontSize: 18
    },
    separadorChat: {
        height: 15
    },
    fondoChat2:{
        height: '5%',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 10,
    },
    fondoChat3:{
        height: '85%',
        width: '100%',
        alignItems: 'flex-start',
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },

    fondoChat4:{
        height: '85%',
        width: '85%',
        alignItems: 'flex-start',
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 25
    },
    buton2: {
        width: 250,
        height: 45,
        backgroundColor: '#e6f6cf',
        borderRadius: 40,
        alignContent: 'center',
        justifyContent:'center',
    },
    buton3: {
        width: 300,
        height: 400,
        backgroundColor: '#fff',
        borderRadius: 40,
        alignContent: 'center',
        justifyContent:'center',
    },
    infoChat2: {
        color: '#000',
        marginLeft: 20,
        fontSize: 15
    },
    titleResultado:{
        color: '#000',
        marginLeft: 22,
        fontSize: 18,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#000',
        marginLeft: 20,
        fontSize: 15,
        fontWeight: 'bold'
    },
    contenido:{
        width: '100%',
        marginLeft: 10,
        marginTop: -15
    },
    contenido2:{
        width: '95%',
        marginLeft: 10,
        marginTop: -15,
    } 
})

export default App;