import React, {Component} from 'react';

import DetalleDolencia from './../components/detalle-dolencias-component';
import Definicion from './../components/detalle/detalle-definicion';
import Sintomas from './../components/detalle/detalle-sintomas';
import Recetas from './../components/detalle/detalle-recetas-naturales';

class ListaFarmaciaContainer extends Component {

    constructor(props){
        super(props);

       const { doler: dole } = this.props.route.params;

        this.state = {
            dolenciaDatos: {
                title: dole.titulo,
            },

            vista: 'pantalla1',
            value:''

        }
    }
      
    cambiarPantalla = (pantalla) => {

        this.setState({
            vista: pantalla,
        });

    };

    handledtext = (data) => {
        this.setState({
            value: data,
        });
    }

    render(){
        const { vista, value, dolenciaDatos } = this.state;

        if(vista === 'pantalla1') {
            return (
                <DetalleDolencia
                    data = {dolenciaDatos}
                    navegar={this.cambiarPantalla}
                    cambiarText={this.handledtext}
                    nombre={value}
                />
            );
        }

        if(vista === 'pantalla2') {
            const {value} = this.state;
            return (
                <Definicion
                    navegar={this.cambiarPantalla}
                    cambiarText={this.handledtext}
                    nombre={value}
                    data = {dolenciaDatos}
                />
            );
        }

        if(vista === 'pantalla3') {
            const {value} = this.state;
            return (
                <Sintomas
                    navegar={this.cambiarPantalla}
                    cambiarText={this.handledtext}
                    nombre={value}
                    data = {dolenciaDatos}
                />
            );
        }

        if(vista === 'pantalla4') {
            const {value} = this.state;
            return (
                <Recetas
                    navegar={this.cambiarPantalla}
                    cambiarText={this.handledtext}
                    nombre={value}
                    data = {dolenciaDatos}
                />
            );
        }

    }

}

export default ListaFarmaciaContainer;