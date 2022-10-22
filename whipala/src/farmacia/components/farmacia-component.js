import * as React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Farmacia_Component = () =>{
    return(
        <View>
            <Text style = {styles.texto}>
                Pantalla de farmacia
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

export default Farmacia_Component;