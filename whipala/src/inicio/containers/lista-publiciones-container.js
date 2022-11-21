import React, {Component} from 'react';
import firestore from '@react-native-firebase/firestore';


import ListaPublicacion from './../components/publicaciones-inicio-component';

class ListaPublicacionesContainer extends Component {

    constructor(props){
        super(props);

        this.state = {

            data: []
            
        }
    }

    loadData = () => {
        const publicaciones = firestore().collection('lista-publicaciones').onSnapshot(querySnapshot =>{
    
        const listaPublicaciones = [];
    
          querySnapshot.forEach(documentSnapshot =>{
            listaPublicaciones.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            })
          })
          
          this.setState({
            data: listaPublicaciones
          })
        })
    
        return () => publicaciones();
      }
    render(){

        const {data} = this.state;

        return(
            <ListaPublicacion
                data = {data} 
            />
        );
        
    }

    componentDidMount(){
        this.loadData()
      }
}

export default ListaPublicacionesContainer;