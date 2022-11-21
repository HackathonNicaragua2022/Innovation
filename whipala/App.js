import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native'

import firestore from '@react-native-firebase/firestore';

const App = () =>{

  const [data, setData] = useState()

  async function loadData() {
    const dolencias = firestore().collection('lista-dolencias').onSnapshot(querySnapshot =>{

    const listaDolencia = [];

      querySnapshot.forEach(documentSnapshot =>{
        listaDolencia.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        })
      })

      setData(listaDolencia);
    })

    return () => dolencias();
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <SafeAreaView style = {{flex:1}}>
    <View style = {{padding: 10, flex: 1, backgroundColor: '#fff'}}>
      <Text style = {{color: '#000'}}>
       Dolencias
      </Text>
        <FlatList
          data = { data }
          keyExtractor = {item => item.key}
          renderItem = {
            ({item}) => <Element item = {item}/>
          }
        />
    </View>
    </SafeAreaView>
  )
}

const  Element = (props) =>{
  const {item} = props;
  return(
    <View style = {{width: '100%', height: 80, backgroundColor: 'green'}}>
      <Text  style = {{color: '#000'}}>primero</Text>
      <Text style = {{color: '#000'}}> {item.titulo} </Text>
    </View>
  )
}


export default App;
