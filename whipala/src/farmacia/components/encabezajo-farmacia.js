import React from 'react';

import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

const App = () => {
    return(
        
        <View style = {styles.efectoSuperior}>
            <Text
                style = {styles.indicador}
            >
                Farmacia
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  
    indicador:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    efectoSuperior:{
        backgroundColor: '#60be8c',
        height: 110,
        borderRadius: 35,
        marginTop: -25,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default App;