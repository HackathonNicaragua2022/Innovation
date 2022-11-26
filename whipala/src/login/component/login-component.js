/*import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet
} from 'react-native';

const App = (props) => {
    const {navegar} = props;
    return(
        <ImageBackground
            source={require('./../../assets/fondod.png')}
            style = {{flex: 1, alignItems: 'center'}}
        >
            <TouchableOpacity
                onPress={navegar}
            >
                <View style = {styles.contenido}>
                    <Text style = {styles.titulo}>
                        Hola,
                    </Text>
                    <Text style = {styles.titulo1}>Bienvendo</Text>
                </View>

                <View style = {{height: 30, width: 50, backgroundColor: 'green'}}>
                    <Text>Navegar</Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    contenido:{
        height: 100,
        width: 250,
        marginTop: 40,
        alignItems:'center'
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
    titulo1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default App;*/


import React from 'react';
import {View, Text, Touchable,TextInput, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';


const Login = (props) => {

    const {navegar} = props;

  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 35, color: darkGreen, fontWeight: 'bold'}}>
            Bienvenido a Whipala
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Entra en tu cuenta
          </Text>

          <Text style = {{color: 'green', marginLeft: -230}}>Correo Electronico</Text>
          <TextInput
              {...props}
              style={{borderRadius: 100, color: darkGreen, paddingHorizontal: 10, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
              placeholderTextColor='efk'></TextInput>

          <Text style = {{color: 'green', marginLeft: -280}}>Contraseña</Text>
           <TextInput
                {...props}
                style={{borderRadius: 100, color: darkGreen, paddingHorizontal: 10, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
                placeholderTextColor='lklkmkl' secureTextEntry={true}></TextInput>
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Olvidaste tu contraseña ?
            </Text>
          </View>
                <TouchableOpacity
                    onPress={navegar}
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: 100,
                        alignItems: 'center',
                        width: 350,
                        paddingVertical: 5,
                        marginVertical: 10
                }}>
                    <View style = {{backgroundColor: 'green', height: 40, width: 250, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center'}}>
                            Login
                        </Text>
                    </View>
                       
                </TouchableOpacity>
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
