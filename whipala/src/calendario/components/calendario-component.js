import * as React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Calendario_Component = () =>{
    return(
        <View>
            <Text style = {styles.texto}>
               Pantalla de calendario
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        color: 'red',
        fontSize: 20,
    }
})

export default Calendario_Component;