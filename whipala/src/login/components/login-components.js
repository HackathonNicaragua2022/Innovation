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


const Login = ({navigation}) => {
    return(
        <TouchableHighlight 
            style = {styles.press}
            onPress={() => navigation.navigate('ComponenteLogin')}
        >
            <ImageBackground
                source = {require('./../../assets/fondo.png')}
                style = {styles.imageContainer}
            > 
                <View style = {styles.fondoContenedor}>

                    <View style = {styles.encabezado}>

                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />

                        <Image
                            source={require('./../../assets/descripcion.png')}
                            style = {styles.imageText}
                        />
                    </View>

                </View>

            </ImageBackground>
        </TouchableHighlight>

    );
}

const styles = StyleSheet.create({
    
    press:{
         flex: 1
    },
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
        justifyContent: 'center',
        alignItems:'center',
    },

    encabezado:{
        height: '60%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    image:{
        width: 220,
        height: 240,
        resizeMode: 'cover',
        marginTop: 30
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
    }
})

export default Login;

/*
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;*/