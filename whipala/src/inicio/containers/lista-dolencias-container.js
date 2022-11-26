import React, {Component } from 'react';
import firestore from '@react-native-firebase/firestore';

import ListaDolencia from './../components/lista-dolencias-inicio-component';

class ListaDolenciaContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: [],
            dataT: [],
        }
    }

     loadData = () => {
      const dolencias = firestore().collection('lista-dolencias').onSnapshot(querySnapshot =>{
  
      const listaDolencia = [];
  
        querySnapshot.forEach(documentSnapshot =>{
          listaDolencia.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          })
        })
        
        this.setState({
          data: listaDolencia
        })
      })
  
      return () => dolencias();
    }

    navigateDolencia = (doler) => {
      this.props.navigation.navigate('Dolencia',{
        doler: doler
      }
    )}

    loadDataF = () => {
      const plantas = firestore().collection('lista-plantas').onSnapshot(querySnapshot =>{
  
      const listaPlantas = [];
  
        querySnapshot.forEach(documentSnapshot =>{
          listaPlantas.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          }) 
        })
        
        this.setState({
          dataT: listaPlantas
        })
      })
  
      return () => plantas();
    }

    navigatePlantas = (planta) => {
      this.props.navigation.navigate('Plantas',{
        planta: planta
      })
    }

  
    render(){

        const {data, dataT }= this.state;     

        return(
            <ListaDolencia
                data = {data} 
                navigateDolencia = {this.navigateDolencia}
                dataT = {dataT}
                navigatePlantas = {this.navigatePlantas}
            />
        );
    }

    componentDidMount(){
      this.loadData()
      this.loadDataF()
    }
}

export default ListaDolenciaContainer;