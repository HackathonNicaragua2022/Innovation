import React, {Component} from 'react';
import firestore from '@react-native-firebase/firestore';


import ListaPlantas from './../components/lista-plantas-inicio-component';

class ListaPlantasContainer extends Component {

    constructor(props){
        super(props);

        this.state = {

            data: []
            
        }
    }

    loadData = () => {
        const plantas = firestore().collection('lista-plantas').onSnapshot(querySnapshot =>{
    
        const listaPlantas = [];
    
          querySnapshot.forEach(documentSnapshot =>{
            listaPlantas.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            }) 
          })
          
          this.setState({
            data: listaPlantas
          })
        })
    
        return () => plantas();
      }

      navigateDolencia = () => {
        this.props.navigation.navigate('Dolencia')
      }

    render(){

        const {data} = this.state;

        return(
            <ListaPlantas
                data = {data}
                navigateDolencia = {this.navigateDolencia}
            />
        );
        
    }

    componentDidMount(){
        this.loadData()
      }
}

export default ListaPlantasContainer;