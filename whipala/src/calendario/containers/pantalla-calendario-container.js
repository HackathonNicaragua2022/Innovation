import React, {Component} from 'react';

import Calendario from './../components/pantalla-calendario-component';

class CalendarioContainer extends Component {

    constructor(props){
        super(props);

        const { detalle: arreglo } = this.props.route.params;

        this.state = {
            detalleDatos: { 
                nom: arreglo.nombre,
                avatar: arreglo.nombre
            },
        }
    } 

 
    render(){

        const { detalleDatos } = this.state;

        return(
            <Calendario
                list = {detalleDatos} 
            />  
        );
    }
}


export default CalendarioContainer;