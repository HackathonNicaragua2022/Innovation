import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';

import DetailList from './detail-list';
import Icon from 'react-native-vector-icons/Ionicons';

const App = (props) => {

    const {data, headers, listImage} = props;

    return(
        
        <View style = {styles.efectoSuperior}>

            <FlatList
                ListHeaderComponent = {
                    <View>
                        <DetailList
                            headers = {headers}
                            listImage = {listImage}
                        />
                    </View>
                    
                }
                    data = {data}
                    ListEmptyComponent = {() => <Text>Componente de texto</Text>}
                    renderItem = {
                        ({item}) => <Element item = {item}/>
                    }
                />

        </View>
    )
}


const Element =(props) => {

    const { item } = props;
    
    return(
        
        <View style = {styles.container}>
            <View style = {styles.tamaño}>
                <View style = {styles.procentaje1}>
                    <Image
                        source = {{ uri: item.imagenProducto}}
                        style = {styles.posterImage}
                    />   
                </View>

                <View style = {styles.procentaje2}>

                    <Text style = {styles.nombreP}> 
                        {item.nombre} 
                    </Text>    
                    <Text style = {styles.descripcion}> 
                        {item.descripcionProducto} 
                    </Text> 

                    <View  style = {styles.direccion}>
                        <View style = {styles.direccion}>
                            <Text style = {styles.precio}> 
                                Precio:   
                            </Text> 
                            <View style = {{width: 5}}/>
                            <Text style = {styles.descripcion}> 
                                C${item.precio} 
                            </Text> 
                        </View>
                        
                        <View style = {styles.direccion}> 

                            <TouchableOpacity>
                                <View style = {styles.fondocircle}>
                                    <Icon name= 'cart' size={20} color={'#fff'}></Icon>
                                </View> 
                            </TouchableOpacity>
                           
                            <View style = {{width: 5}}/>

                            <TouchableOpacity>
                                <View style = {styles.fondocircle}>
                                    <Icon name= 'share-social' size={20} color={'#fff'}></Icon>
                                </View>
                             </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style = {{height: 5}}/>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        marginTop: 2,
        width: '100%',
        alignItems: 'center'
    },
    tamaño:{
        width: '95%',
        backgroundColor: '#fff',
        height: 200,
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    posterImage: {
        width: '100%',
        height: 180,
        borderRadius: 15,
        resizeMode: 'contain',
    },
    procentaje1: {
        width: '40%',
        height: 90,
        //backgroundColor: 'red'
    },
    procentaje2: {
        width: '57%',
        height: 180,
        //backgroundColor: 'red',
        justifyContent: 'space-between'
    },
    direccion: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nombreP:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#102d3b',
        marginTop: 10
    },
    descripcion:{
        fontSize: 15,
        color: '#102d3b'
    },
    precio:{
        fontSize: 15,
        color: '#102d3b',
        fontWeight: 'bold'
    },
    fondocircle:{
        height: 35,
        width: 35,
        backgroundColor: '#3a7456',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    }
})

export default App;