import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image
} from 'react-native';

const Ajuste_Component = () =>{
    return(

        <View
            //source = {require('./../../assets/fondo.png')}
            //style = {styles.imageContainer}
            style = {styles.glass}
        > 
             <Image
                source={require('./../../assets/setting.png')}
                style = {styles.image}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        elevation: 4, 
    },

    glass:{
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },


    image:{
        width: 350,
        height:690,
        resizeMode: 'cover',
        borderColor: 'white',
    },

})

export default Ajuste_Component;