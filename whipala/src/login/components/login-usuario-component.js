import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

import {navigation} from  'react-native'

const LoginUsuario = ({navigation}) =>{
    return(
        <View>
            <Text style = {styles.texto}>Documento</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('MenuTabs')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    texto:{
        color: 'red'
    }
})

export default LoginUsuario;