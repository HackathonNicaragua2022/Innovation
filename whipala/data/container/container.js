import React, { Component } from 'react';

import Pantalla1 from './../component/App1';
import Pantalla2 from './../component/App2';
import Pantalla3 from './../component/App3';

class PantallaContenedor extends Component {

    constructor(props) {
        super(props);

        //inicializamos el estado
        this.state = {
            vista: 'pantalla1',
            value:''
        };

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

    render() {

        const { vista,value } = this.state;

        if(vista === 'pantalla1') {
            return (
                <Pantalla1
                    navegar={this.cambiarPantalla}
                    cambiarText={this.handledtext}
                    nombre={value}
                />
            );
        }

        if(vista === 'pantalla2') {
            const {value} = this.state;
            return (
                <Pantalla2
                    cambiarPantalla={this.cambiarPantalla}
                    nombre = {value}

                />
            );
        }

        if(vista === 'pantalla3') {
            const {value} = this.state;
            return (
                <Pantalla3
                    cambiarPantalla={this.cambiarPantalla}
                    nombre = {value}

                />
            );
        }

    }

}

export default PantallaContenedor;