import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    Image,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import IconP from 'react-native-vector-icons/MaterialIcons';
import Encabezado from './../components/encabezado-dos';

const ListaFarmacia = (props) => { 

    const { 
        navigateFarmaciaDetalle,
        dataTop, 
        navigateCita,
    } = props;

    return(
        <SafeAreaView style = {styles.fondoFlatList}>

            <Encabezado/>

            <Text style = {styles.infora}>Lista de medicos Medicos</Text>

            <View style = {{backgroundColor: '#f7f5fc', height: '100%'}}>              
                <FlatList
                    data = {dataTop}
                    horizontal = {false}
                    showsHorizontalScrollIndicator = {false}
                    ListEmptyComponent = {() => <Text>Componente de texto</Text>}
                    renderItem = {
                        ({item}) => <Elemento item = {item} onPress = {() => { navigateFarmaciaDetalle(item); }}/>
                    }
                    ItemSeparatorComponent = {() => <View style = {styles.separadora}/>}
                />
            </View>

        </SafeAreaView>

    );

}

const Elemento = ( props ) => {

    const { item, onPress } = props;
    
    return(

        <TouchableOpacity
            onPress={ onPress}
        >
        
            <View style = {styles.fondoa}>

                <View style = {styles.fondoListaa}>

                    <View  style = {styles.fondoContainera}>
                            <View style = {{marginLeft: 10, width: '55%',justifyContent: 'center'}}>
                                <Image
                                    source = {{ uri: item.avatar }}
                                    style = {{height: 150,
                                    width: 180,
                                    borderRadius: 10,
                                    marginTop: 0}}
                                />
                            </View>
                            <View style = {{width: '50%', justifyContent: 'center', height: '100%'}}>
                               
                                <Text style = {styles.titulosa}>
                                    {item.nombre}
                                </Text>

                                <View style = {{height: 10}}/>

                                <Text style = {styles.titulosas}>
                                    {item.especialista}
                                </Text>

                                <View style = {{height: 10}}/>

                                <View style = {styles.estiloIconoLa}>
                                    <Icon name={item.skill} size={25} color={'#ebd192'}></Icon>
                                    <Icon name={item.skill2} size={25} color={'#ebd192'}></Icon>
                                    <Icon name={item.skill3} size={25} color={'#ebd192'}></Icon>
                                    <Icon name={item.skill4} size={25} color={'#ebd192'}></Icon>
                                    <IconP name={item.skill5} size={25} color={'#ebd192'}></IconP>
                                </View>
                            </View>

                           
                    </View>
                   
                </View>

            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
 //OTRO
    fondoa: {
        marginTop: 0,
       // backgroundColor: 'red',
        padding: 10
    },

    fondoListaa: {
        width: '100%',
        height: 170,
        backgroundColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
    },
    fondoContainera: {
        width: '90%',
        height: '90%',
        //backgroundColor: 'green',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    estiloIconoLa:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    titulosa:{
        color: '#102d3b', 
        fontSize: 20, 
        fontWeight: 'bold'
    },
    titulosas:{
        color: '#102d3b', 
        fontSize: 16, 
        marginTop: -5
    },
    infora:{
        color: '#102d3b',
        paddingLeft: 12,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 25
    }
})

export default ListaFarmacia;