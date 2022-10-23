import * as React from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView 
} from 'react-native';

const CitasMedicas_Component = () =>{
    return(

        <ImageBackground
        source = {require('./../../assets/fondo.png')}
        style = {styles.imageContainer}
    > 

        <ScrollView>
            <View style = {styles.container}>
                
                <View style = {styles.tamaño}>
                    <View style = {styles.orientacion}>
                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />
                        <Text style = {styles.texto}>Cita</Text>
                    </View>

                    <Text style = {styles.texto1}>Jesner Romero</Text>
                    <Text style = {styles.texto2}>Recuerda que tienes cita con el doctor Martinez el 26 de octubre</Text>
                </View>
                

                <View style = {styles.div}></View>

                <View style = {styles.tamaño}>
                    <View style = {styles.orientacion}>
                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />
                        <Text style = {styles.texto}>Promoción</Text>
                    </View>

                    <Text style = {styles.texto1}>Farmacia el farmaco</Text>
                    <Text style = {styles.texto2}>Este fin de semana tenemos descuento en la seccion de pomadas naturales</Text>
                </View>
                

                <View style = {styles.div}></View>

                <View style = {styles.tamaño}>
                    <View style = {styles.orientacion}>
                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />
                        <Text style = {styles.texto}>Cita</Text>
                    </View>

                    <Text style = {styles.texto1}>Jesner Romero</Text>
                    <Text style = {styles.texto2}>Recuerda que tienes cita con el doctor Martinez el 26 de octubre</Text>
                </View>
                

                <View style = {styles.div}></View>

                <View style = {styles.tamaño}>
                    <View style = {styles.orientacion}>
                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />
                        <Text style = {styles.texto}>Cita</Text>
                    </View>

                    <Text style = {styles.texto1}>Jesner Romero</Text>
                    <Text style = {styles.texto2}>Recuerda que tienes cita con el doctor Martinez el 26 de octubre</Text>
                </View>
                

                <View style = {styles.div}></View>

                <View style = {styles.tamaño}>
                    <View style = {styles.orientacion}>
                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />
                        <Text style = {styles.texto}>Cita</Text>
                    </View>

                    <Text style = {styles.texto1}>Jesner Romero</Text>
                    <Text style = {styles.texto2}>Recuerda que tienes cita con el doctor Martinez el 26 de octubre</Text>
                </View>
                

                <View style = {styles.div}></View>

                <View style = {styles.tamaño}>
                    <View style = {styles.orientacion}>
                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />
                        <Text style = {styles.texto}>Cita</Text>
                    </View>

                    <Text style = {styles.texto1}>Jesner Romero</Text>
                    <Text style = {styles.texto2}>Recuerda que tienes cita con el doctor Martinez el 26 de octubre</Text>
                </View>
                

                <View style = {styles.div}></View>

                <View style = {styles.tamaño}>
                    <View style = {styles.orientacion}>
                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />
                        <Text style = {styles.texto}>Cita</Text>
                    </View>

                    <Text style = {styles.texto1}>Jesner Romero</Text>
                    <Text style = {styles.texto2}>Recuerda que tienes cita con el doctor Martinez el 26 de octubre</Text>
                </View>
                

                <View style = {styles.div}></View>
             
            </View>
        </ScrollView>

    </ImageBackground>

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

    div:{
        height: 10
    },

    texto:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5,
        marginLeft: 10,
    },

    texto1:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5,
        marginLeft: 10
    },

    texto2:{
        fontSize: 18,
        color: 'black',
        marginTop: 5,
        marginLeft: 10
    },



    container:{
        //backgroundColor: 'red',
        width: 380,
        marginTop: 15,
    },
    orientacion:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15
    },

    tamaño: {
        width: 380,
        backgroundColor: 'white',
        opacity: 0.6,
        height: 140,
        borderRadius: 25,
        alignItems: 'flex-start',
        justifyContent: 'center'    
    },

    image:{
        width:40,
        height: 40,
        resizeMode: 'cover',
        borderColor: 'white',
        borderRadius: 50,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default CitasMedicas_Component;