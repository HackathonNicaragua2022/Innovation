import React from 'react';

import {
    View,
    Text,
    Button,
    TextInput
} from 'react-native';

const Pantalla1 = (props) => {

    const { data, navegar, cambiarText, nombre } = props;

    return (
        <View>
             <Text style = {{color: 'red'}}>{data.title}</Text>
            <Text style = {{color: 'red'}}>Sintomas</Text>
            <TextInput
                onChangeText={cambiarText}
                defaultValue={nombre}
            />
            <Button
                title='Ir a pantalla 1'
                onPress={
                    () => {
                        navegar('pantalla1');
                    }
                }
            />
                </View>
    );

};

export default Pantalla1;