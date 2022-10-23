/*import * as React from "react";
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

const Farmacia_Component = () =>{
    return(
        
        <ImageBackground
            source = {require('./../../assets/fondo.png')}
            style = {styles.imageContainer}
        > 
        
            <View style = {styles.subContenedor}>

                <View style = {styles.div}></View>
                
                <TouchableOpacity style = {styles.encabezado}>
                    <View style = {styles.posicionImagen}>
                        <Image
                            source={require('./../../assets/farmacia.jpg')}
                            style = {styles.image}
                        />
                    </View>
                    <View style = {styles.informacion}>
                        <Text style = {styles.doctor}>
                            Farmacia Baéz
                        </Text>

                        <Text style = {styles.especialidad}>
                            Semaforos del cementerio 25 vrs al este.
                        </Text>

                        <Text style = {styles.fecha}>
                            Contacto: 2512-1487
                        </Text>
                    </View>

                </TouchableOpacity>

                <View style = {styles.div}></View>

                <TouchableOpacity style = {styles.encabezado}>
                    <View style = {styles.posicionImagen}>
                        <Image
                            source={require('./../../assets/b0qlzF7SuOWwSVzq6Kiy_Atraer-clientes-a-tu-farmacia-1080x675.jpg')}
                            style = {styles.image}
                        />
                    </View>
                    <View style = {styles.informacion}>
                        <Text style = {styles.doctor}>
                            Farmacia San Ramón
                        </Text>

                        <Text style = {styles.especialidad}>
                            Contiguo a la tienda Lenin.
                        </Text>

                        <Text style = {styles.fecha}>
                            Contacto: 2512-1547
                        </Text>
                    </View>

                </TouchableOpacity>

                <View style = {styles.div}></View>

                <TouchableOpacity style = {styles.encabezado}>
                    <View style = {styles.posicionImagen}>
                        <Image
                            source={require('./../../assets/AdobeStock_89417879-1536x1170.jpeg')}
                            style = {styles.image}
                        />
                    </View>
                    <View style = {styles.informacion}>
                        <Text style = {styles.doctor}>
                            Farmacia el Farmaco
                        </Text>

                        <Text style = {styles.especialidad}>
                            Copy print 10 vrs al norte.
                        </Text>

                        <Text style = {styles.fecha}>
                            Contacto: 2512-1589
                        </Text>
                    </View>

                </TouchableOpacity>

                <View style = {styles.div}></View>

                <TouchableOpacity style = {styles.encabezado}>
                    <View style = {styles.posicionImagen}>
                        <Image
                            source={require('./../../assets/inside-farmacia.jpg')}
                            style = {styles.image}
                        />
                    </View>
                    <View style = {styles.informacion}>
                        <Text style = {styles.doctor}>
                            Farmacia Cristal
                        </Text>

                        <Text style = {styles.especialidad}>
                            Del Verdugo media cuadra al sur.
                        </Text>

                        <Text style = {styles.fecha}>
                            Contacto: 2512-4586
                        </Text>
                    </View>

                </TouchableOpacity>

            </View>
            

        </ImageBackground>
    );
}


const styles = StyleSheet.create({

    subContenedor:{
        backgroundColor: 'white',
        width: '95%',
        height: '95%',
        borderRadius: 40,
        alignItems: 'center'
    },

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

    encabezado: {
        backgroundColor: 'green',
        width: '96%',
        height: '20%',
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

       posicionImagen: {
        //backgroundColor: 'black',
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center'
       },

       informacion: {
       // backgroundColor: 'purple',
        width: '65%',
        justifyContent: 'center'
       },

       image:{
        width: 110,
        height: 110,
        resizeMode: 'cover',
        borderColor: 'white',
        borderRadius: 25,
        borderWidth: 3
    },

    doctor: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 5
    },

    especialidad: {
        color: 'white',
        fontSize: 15,
        marginTop: 10,
        marginRight: 5
    },

    fecha: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10
    },

})



export default Farmacia_Component;*/

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

const Farmacia_Component = () =>{
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

                        <View style = {styles.margen}>
                            <Text style = {styles.texto}>Farmacia Cristal</Text>
                            <Text style = {styles.texto2}>Del verdugo 50 mts al sur.</Text>
                            <Text style = {styles.texto1}>Contacto: 2512-4586</Text>                
                        </View>
                    </View>
                    
                </View>
                
                <View style = {styles.div}></View>

            </View>

            <View style = {styles.container}>
                
                <View style = {styles.tamaño}>
                    <View style = {styles.orientacion}>
                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />

                        <View style = {styles.margen}>
                            <Text style = {styles.texto}>Farmacia Cristal</Text>
                            <Text style = {styles.texto2}>Del verdugo 50 mts al sur.</Text>
                            <Text style = {styles.texto1}>Contacto: 2512-4586</Text>                
                        </View>
                    </View>
                    
                </View>
                
                <View style = {styles.div}></View>

            </View>

            <View style = {styles.container}>
                
                <View style = {styles.tamaño}>
                    <View style = {styles.orientacion}>
                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />

                        <View style = {styles.margen}>
                            <Text style = {styles.texto}>Farmacia Cristal</Text>
                            <Text style = {styles.texto2}>Del verdugo 50 mts al sur.</Text>
                            <Text style = {styles.texto1}>Contacto: 2512-4586</Text>                
                        </View>
                    </View>
                    
                </View>
                
                <View style = {styles.div}></View>

            </View>

            <View style = {styles.container}>
                
                <View style = {styles.tamaño}>
                    <View style = {styles.orientacion}>
                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />

                        <View style = {styles.margen}>
                            <Text style = {styles.texto}>Farmacia Cristal</Text>
                            <Text style = {styles.texto2}>Del verdugo 50 mts al sur.</Text>
                            <Text style = {styles.texto1}>Contacto: 2512-4586</Text>                
                        </View>
                    </View>
                    
                </View>
                
                <View style = {styles.div}></View>

            </View>

            <View style = {styles.container}>
                
                <View style = {styles.tamaño}>
                    <View style = {styles.orientacion}>
                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />

                        <View style = {styles.margen}>
                            <Text style = {styles.texto}>Farmacia Cristal</Text>
                            <Text style = {styles.texto2}>Del verdugo 50 mts al sur.</Text>
                            <Text style = {styles.texto1}>Contacto: 2512-4586</Text>                
                        </View>
                    </View>
                    
                </View>
                
                <View style = {styles.div}></View>

            </View>

            <View style = {styles.container}>
                
                <View style = {styles.tamaño}>
                    <View style = {styles.orientacion}>
                        <Image
                            source={require('./../../assets/iconowhipala.png')}
                            style = {styles.image}
                        />

                        <View style = {styles.margen}>
                            <Text style = {styles.texto}>Farmacia Cristal</Text>
                            <Text style = {styles.texto2}>Del verdugo 50 mts al sur.</Text>
                            <Text style = {styles.texto1}>Contacto: 2512-4586</Text>                
                        </View>
                    </View>
                    
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

    margen:{
        marginTop: 5
    },

    texto:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5,
        marginLeft: 10
    },

    texto1:{
        fontSize: 17,
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
        width:110,
        height: 110,
        resizeMode: 'cover',
        borderColor: 'white',
        borderRadius: 60,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Farmacia_Component;