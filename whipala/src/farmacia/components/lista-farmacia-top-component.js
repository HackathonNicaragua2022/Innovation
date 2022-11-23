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

import Icon from 'react-native-vector-icons/MaterialIcons';

const ListaFarmaciaTop = (props) => { 

    const { data } = props;

    return(
        <SafeAreaView style = {styles.fondoFlatList}>

            <Text style = {styles.infor}>Top de Farmacias</Text>

            <View>              
                <FlatList
                    data = {data}
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    ListEmptyComponent = {() => <Text>Componente de texto</Text>}
                    renderItem = {
                        ({item}) => <Element item = {item}/>
                    }
                    ItemSeparatorComponent = {() => <View style = {styles.separador}/>}
                />
            </View>
        </SafeAreaView>

    );

}

const Element = ( props ) => {

    const { item } = props;
    
    return(

        <TouchableOpacity>
        
            <View style = {styles.fondo}>

                <View style = {styles.fondoLista}>

                    <View  style = {styles.fondoContainer}>
                            <View>
                                <Image
                                    source = {{ uri: item.imagenTop }}
                                    style = {{height: 150,
                                    width: 180,
                                    borderRadius: 10,
                                marginTop: 0}}
                                />
                            </View>
                            <Text style = {styles.titulos}>
                                {item.titulo}
                            </Text>

                            <View style = {styles.estiloIconoL}>
                                <Icon name={item.skill} size={25} color={'#ebd192'}></Icon>
                                <Icon name={item.skill2} size={25} color={'#ebd192'}></Icon>
                                <Icon name={item.skill3} size={25} color={'#ebd192'}></Icon>
                                <Icon name={item.skill4} size={25} color={'#ebd192'}></Icon>
                                <Icon name={item.skill5} size={25} color={'#ebd192'}></Icon>
                            </View>
                    </View>
                   
                </View>

            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    fondoFlatList:{
        backgroundColor: '#f7f5fc'
    },   
    fondo: {
        alignItems: 'center',
        marginTop: 0,
       // backgroundColor: 'red',
        padding: 10
    },

    fondoLista: {
        width: 200,
        height: 220,
        backgroundColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },
    fondoContainer: {
        width: '90%',
        height: '90%',
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    estiloIconoL:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    titulos:{
        color: '#102d3b', 
        fontSize: 20, 
        fontWeight: 'bold'
    },

    infor:{
        color: '#102d3b',
        paddingLeft: 12,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 25
    }
})

export default ListaFarmaciaTop;