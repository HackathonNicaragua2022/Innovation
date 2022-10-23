import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
    ScrollView
} from 'react-native';

const LoginUsuario = ({navigation}) =>{
    return(
        <ImageBackground
                source = {require('./../../assets/fondo.png')}
                style = {styles.imageContainer}
            > 
                <View style = {styles.fondoContenedor}>

                    <View style = {styles.encabezado}>

                        <Text style = {styles.bienvenidoT}>
                            BIENVENIDO
                        </Text>

                    </View>

                <View style = {styles.cuerpo}>

                    <Text style = {styles.texto}>
                        Inicia sesion para continuar
                    </Text>

                    <TouchableOpacity 
                        style = {styles.botonLogin}
                        onPress={() => navigation.navigate('MenuTabs')}
                    >
                        <Text style = {styles.textoButon}>
                            Correo Electronico
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style = {styles.pie}>
                    <Image
                        source={require('./../../assets/Recurso1.png')}
                        style = {styles.image}
                    />
                </View>

                </View>

            </ImageBackground>
    );
}

const styles = StyleSheet.create({

   imageContainer:{
       flexDirection: 'column',
       justifyContent: 'space-between',
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   },

   fondoContenedor:{
       width: '90%',
       height: '90%',
       alignItems:'center',
       marginTop: 60
   },

   encabezado:{
       height: '30%',
       width: '100%',
       alignItems: 'center',
       justifyContent: 'center',
   },

   cuerpo:{
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
   pie:{
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

   image:{
       width: 180,
       height: 70,
       resizeMode: 'cover',
   },

   imageText:{
       width: 300,
       height: 80,
       resizeMode: 'cover',
       marginTop: 20
   },

   imageLetra:{
       width: 220,
       height: 60,
       resizeMode: 'cover',
       marginTop: 20
   },

   bienvenidoT:{
    color: '#ffff',
    fontSize: 50,
    fontWeight:'bold'
   },

   texto:{
    color: '#ffff',
    fontSize: 20,
    fontWeight:'bold'
   },

   textoButon:{
    color: 'black',
    fontSize: 15,
    fontWeight:'bold',
   },

   botonLogin:{
    backgroundColor: 'white',
    marginTop: 20,
    width: '70%',
    height: 45,
    borderRadius: 25,
    alignItems:'center',
    justifyContent: 'center',
   }
})

export default LoginUsuario;