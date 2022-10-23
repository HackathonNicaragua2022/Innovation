import * as React from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Image
} from 'react-native';

const ChatBot_Component = () =>{
    return(
        <ImageBackground
        source = {require('./../../assets/fondo.png')}
        style = {styles.imageContainer}
        > 
            <View style = {styles.subContenedor}>

                <View style = {styles.encabezado}>
                    <View style = {styles.posicionImagen}>
                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />
                    </View>
                    <View style = {styles.informacion}>
                        <Text style = {styles.doctor}>
                            Whipala
                        </Text>

                        <Text style = {styles.especialidad}>
                            Online
                        </Text>
                    </View>
                </View>

                <View style = {styles.cuerpo}>
                    
                    <View style = {styles.chatfondo1}>

                        <View style = {styles.div}/>
                        
                        <View style = {styles.chatfondo}>

                           
                            <View style = {styles.chatEspacio1}>
                                <View >
                                    <Text style = {styles.whipala}>Hola...</Text>
                                </View>
                            </View>

                             <View style = {styles.imageEspacio}>
                                <Image
                                    source={require('./../../assets/iconowhipala.png')}
                                    style = {styles.imageChat}
                                />
                            </View>

                        </View>

                        <View style = {styles.div2}/>
                        
                        <View style = {styles.chatfondo}>

                            <View style = {styles.imageEspacio}>
                                <Image
                                    source={require('./../../assets/iconowhipala.png')}
                                    style = {styles.imageChat}
                                />
                            </View>

                            <View style = {styles.chatEspacio}>
                                <View >
                                    <Text style = {styles.whipala}>Hola Brandon!!!</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View>

                    </View>

                </View>

                <View style = {styles.pie}>
                    <View 
                            style = {styles.botonLogin}
                        >
                            <Text style = {styles.textoButon}>
                                Escribir...
                            </Text>
                    </View>

                    <TouchableOpacity 
                            style = {styles.enviar}
                        >
                            <Image
                                source={require('./../../assets/send-plane-fill.png')}
                                style = {styles.imageChatEnviar}
                            />
                    </TouchableOpacity>
                </View>
                
            </View>
            
        </ImageBackground>
    );
}


const styles = StyleSheet.create({


    subContenedor:{
        backgroundColor: '#ffff',
        width: '95%',
        height: '95%',
        borderRadius: 40,
        alignItems: 'center'
    },

    imageContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        elevation: 4, 
    },

    encabezado: {
        backgroundColor: 'green',
        width: '90%',
        height: '12%',
        borderRadius: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },

    cuerpo: {
        //backgroundColor: 'blue',
        marginTop: 20,
        width: '95%',
        height: '70%',
        borderRadius: 40,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems:'center'
    },

    pie:{
        width: '90%',
        height: '12%',
        //backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textoButon:{
        color: '#ccc8ca',
        fontSize: 20,
        marginLeft: 20
       },
    
       botonLogin:{
        backgroundColor: 'white',
        marginTop: 20,
        width: '82%',
        height: 45,
        borderRadius: 25,
        alignItems:'flex-start',
        justifyContent: 'center',
        borderColor: 'green',
        borderWidth: 2
       },

       posicionImagen: {
        //backgroundColor: 'black',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center'
       },

       informacion: {
       //backgroundColor: 'purple',
        width: '70%',
        justifyContent: 'center'
       },

       image:{
        width: 65,
        height: 65,
        resizeMode: 'cover',
        borderColor: 'white',
        borderRadius: 60,
        borderWidth: 3
    },

    imageChat:{
        width: 55,
        height: 55,
        resizeMode: 'cover',
        borderColor: '#ccc8ca',
        borderRadius: 60,
        borderWidth: 2
    },

    imageChatEnviar:{
        width: 30,
        height: 30,
        marginLeft: -2
    },

    doctor: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },

    especialidad: {
        color: 'white',
        fontSize: 16,
    },

    fecha: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10
    },

    cita:{
        backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 10
    },
    citaTexto: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'green'
    },

    imageHora: {
        width: 260,
        height: 30,
        marginTop: -20
    },

    chatfondo:{
        //backgroundColor: 'red',
        width: '95%',
        flexDirection: 'row'
    },

    chatfondo1:{
        //backgroundColor: 'red',
        width: '95%',
    },

    div:{
        height: 10
    },

    div2:{
        height: 20
    },


    imageEspacio:{
        width: '20%',
        //backgroundColor: 'green',
        alignItems: 'center'
    },
    chatEspacio:{
        width: '80%',
        backgroundColor: '#bce680',
        alignItems: 'center',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    chatEspacio1:{
        width: '80%',
        backgroundColor: '#dad6d8',
        alignItems: 'center',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 7
    },
    whipala:{
        fontSize: 17,
        color: 'black',
        marginLeft: 20
    },

    enviar:{
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderColor: '#ccc8ca',
        borderRadius: 60,
        backgroundColor: 'green',
        marginTop: 18,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default ChatBot_Component;