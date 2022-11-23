import React, {Component} from 'react';
import firestore from '@react-native-firebase/firestore';


import ListaFarmaciaTop from './../components/lista-farmacia-top-component';

class ListaFarmaciaContainer extends Component {

    constructor(props){
        super(props);

        this.state = {

            data: []
            
        }
    }

    loadData = () => {
        const notificaciones = firestore().collection('lista-top-farmacia').onSnapshot(querySnapshot =>{
    
        const listaNotificaciones = [];
    
          querySnapshot.forEach(documentSnapshot =>{
            listaNotificaciones.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            })
          })

          this.setState({
            data: listaNotificaciones
          })

        })
    
        return () => notificaciones();
      }
      
    render(){

        const {data} = this.state;

        return(
            <ListaFarmaciaTop
                data = {data} 
            />
        );
        
    }

    componentDidMount(){
        this.loadData()
      }
}

export default ListaFarmaciaContainer;