import * as React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Inicio = () => {
    return(
        <View style = {styles.fondo}>
            <Text>
                Inicio
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    fondo: {
        backgroundColor: 'green'
    }
})

export default Inicio;