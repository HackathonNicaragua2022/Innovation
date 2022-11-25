import React, {Component} from 'react';
import firestore from '@react-native-firebase/firestore';

import Calendario from './../components/medicos-componente';

class ListaFarmaciaContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: [],
            dataTop: []
            
        }
    }

    loadDataD = () => {
      const lista = firestore().collection('lista-top-doctor').onSnapshot(querySnapshot =>{
  
      const listaTopDoctor = [];
  
        querySnapshot.forEach(documentSnapshot =>{
          listaTopDoctor.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          })
        })

        this.setState({
          dataTop: listaTopDoctor
        })

      })
  
      return () => lista();
  }

      navigateFarmaciaDetalle = (farmacia) => {
        this.props.navigation.navigate('calendarioDetalle',{
          farmacia: farmacia
        })
      } 
      
    render(){

        const {data, dataTop} = this.state;

        return(
            <Calendario
                dataTop = {dataTop} 
                navigateFarmaciaDetalle = {this.navigateFarmaciaDetalle}
            />
        );
        
    }

    componentDidMount(){
        this.loadDataD()
      }
}

export default ListaFarmaciaContainer;