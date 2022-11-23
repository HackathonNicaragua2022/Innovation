import React, {Component} from 'react';
import firestore from '@react-native-firebase/firestore';


import ListaFarmacia from './../components/lista-farmacia-component'

class ListaFarmaciaContainer extends Component {

    constructor(props){
        super(props);

        this.state = {

            data: []
            
        }
    }

    loadData = () => {
        const notificaciones = firestore().collection('lista-farmacia').onSnapshot(querySnapshot =>{
    
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
            <ListaFarmacia
                data = {data} 
            />
        );
        
    }

    componentDidMount(){
        this.loadData()
      }
}

export default ListaFarmaciaContainer;