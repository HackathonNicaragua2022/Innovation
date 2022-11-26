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

    const { onPress } = props;

    return(
        <ScrollView style = {styles.container}>

            <View style = {styles.efecto}>
                <View style = {styles.title}>
                    <Text style = {styles.titulo}>
                        ¡ Hola, Bienvenido !
                    </Text>

                    <View style = {styles.separador}/>

                    <Text style = {styles.info}>
                        Estamos aquí para ayudarte...
                    </Text>
                </View>

                <View style = {styles.fondoImage}>
                    <Image
                        source = {require('./../../../assets/1.png')}
                        style = {styles.image}
                    />
                </View>
                
            </View>

            <View style = {styles.fondoChat}>

                <View style = {styles.ayuda}>
                    <Text style = {styles.infoAyuda}>
                        ¿Como podemos ayudarte?...
                    </Text>
                </View>

                <View style = {styles.separadorChat}/>

                <TouchableOpacity
                    onPress={onPress}
                >
                    <View style = {styles.buton}>
                        <Text style = {styles.infoChat}>
                            ¿Tienes una dolenia?
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style = {styles.separadorChat}/>

                <TouchableOpacity>
                    <View style = {styles.buton}>
                        <Text style = {styles.infoChat}>
                            ¿Necesitas saber propiedades de plantas?
                        </Text>
                    </View>

                </TouchableOpacity>

                <View style = {styles.separadorChat}/>

                <TouchableOpacity>

                    <View style = {styles.buton}>
                        <Text style = {styles.infoChat}>
                            ¿Deseas recetas naturales?
                        </Text>
                    </View>

                </TouchableOpacity>

                <View style = {styles.separadorChat}/>

                <TouchableOpacity>
                    <View style = {styles.buton}>
                        <Text style = {styles.infoChat}>
                            ¿Deseas saber curiosidades de medicina natural?
                        </Text>
                    </View>

                </TouchableOpacity>

                
                <View style = {styles.separadorChat}/>

                <TouchableOpacity>


                    <View style = {styles.buton}>
                        <Text style = {styles.infoChat}>
                            ¿Deseas los tipos de medicina alternativa?
                        </Text>
                    </View>

                </TouchableOpacity>

                <View style = {styles.separadorChat}/>

                <TouchableOpacity>

                    <View style = {styles.buton}>
                        <Text style = {styles.infoChat}>
                            ¿Deseas saber los beneficios de nuestra app?
                        </Text>
                    </View>

                </TouchableOpacity>

                <View style = {styles.separadorChat}/>

                <TouchableOpacity>

                    <View style = {styles.buton}>
                        <Text style = {styles.infoChat}>
                            ¿Deseas saber la historia de la medicina natural en Nicaragua?
                        </Text>
                    </View>

                </TouchableOpacity>

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
        justifyContent: 'center'
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
        width: 150,
        height: 150
    },
    fondoChat:{
        height: 500,
        width: '100%',
        alignItems: 'flex-end',
        padding: 10,
    },
    buton: {
        width: 300,
        height: 55,
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
        height: 10
    }
})

export default App;