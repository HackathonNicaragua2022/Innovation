import React, {Component} from 'react';
import firestore from '@react-native-firebase/firestore';

import Calendario from './../components/calendario-component';

class ListaFarmaciaContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: [],
            dataTop: []
            
        }
    }

    loadData = () => {
        const calendario = firestore().collection('lista-proxima-cita').onSnapshot(querySnapshot =>{
    
        const listaCalendario = [];
    
          querySnapshot.forEach(documentSnapshot =>{
            listaCalendario.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            })
          })

          this.setState({
            data: listaCalendario
          })

        })
    
        return () => calendario();
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

      navigateCita = () => {
        this.props.navigation.navigate('Cita')
      } 

      navigateCalendar = (detalle) => {
        this.props.navigation.navigate('PantallaCalendario', {
          datalle: detalle
        }
      )} 

      navigateCalendarCompleto = (detalle) => {
        this.props.navigation.navigate('CalendarioDetalleX', {
          datalle: detalle
        }
      )} 
      
    render(){

        const {data, dataTop} = this.state;

        return(
            <Calendario
                data = {data} 
                dataTop = {dataTop} 
                navigateFarmaciaDetalle = {this.navigateFarmaciaDetalle}
                navigateCita = {this.navigateCita}
                navigateCalendar = {this.navigateCalendar}
                navigateCalendarCompleto = {this.navigateCalendarCompleto}
            />
        );
        
    }

    componentDidMount(){
        this.loadData()
        this.loadDataD()
      }
}

export default ListaFarmaciaContainer;