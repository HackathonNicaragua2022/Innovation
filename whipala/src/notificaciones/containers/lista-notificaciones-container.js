import React, {Component} from 'react';
import firestore from '@react-native-firebase/firestore';


import ListaNotificacion from './../components/lista-notificaciones-component'

class ListaNotificacionContainer extends Component {

    constructor(props){
        super(props);

        this.state = {

            data: []
            
        }
    }

    loadData = () => {
        const notificaciones = firestore().collection('lista-notificaciones').onSnapshot(querySnapshot =>{
    
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
            <ListaNotificacion
                data = {data} 
            />
        );
        
    }

    componentDidMount(){
        this.loadData()
      }
}

export default ListaNotificacionContainer;