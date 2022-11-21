import React, {Component } from 'react';
import firestore from '@react-native-firebase/firestore';

import ListaDolencia from './../components/lista-dolencias-inicio-component';

class ListaDolenciaContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: [],
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

  
    render(){

        const {data} = this.state;     

        return(
            <ListaDolencia
                data = {data} 
            />
        );
    }

    componentDidMount(){
      this.loadData()
    }
}

export default ListaDolenciaContainer;