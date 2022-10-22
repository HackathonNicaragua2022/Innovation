import * as React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const CitasMedicas_Component = () =>{
    return(
        <View>
            <Text style = {styles.texto}>
               Pantalla de citas medicas
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

export default CitasMedicas_Component;