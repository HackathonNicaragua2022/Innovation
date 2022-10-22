import * as React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const ChatBot_Component = () =>{
    return(
        <View>
            <Text style = {styles.texto}>
                Mi pantalla de Chat
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

export default ChatBot_Component;