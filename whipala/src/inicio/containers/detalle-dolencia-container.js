import React, {Component} from 'react';

import DetalleDolencia from './../components/detalle-dolencias-component';
import Definicion from './../components/detalle/detalle-definicion';
import Sintomas from './../components/detalle/detalle-sintomas';
import Recetas from './../components/detalle/detalle-recetas-naturales';
import Prevencion from './../components/detalle/detalle-prevencion';
import Precacion from './../components/detalle/detalle-precaucion';

class ListaFarmaciaContainer extends Component {

    constructor(props){
        super(props);

       const { doler: dole } = this.props.route.params;

        this.state = {
            dolenciaDatos: {
                title: dole.titulo,
                defi: dole.definicion,
                imagenInfor: dole.imagenInfo,
                imagenSin: dole.imagenSintoma,
                in1: dole.info1,
                in2: dole.info2,
                in3: dole.info3,
                in4: dole.info4,
                in5: dole.info5,
                prevent: dole.prevencion,
                consej1: dole.consejo1,
                consej2: dole.consejo2,
                consej3: dole.consejo3,
                preca: dole.imagenPrecaucion,
                descripPreca: dole.descripcionPrecaucion,
                prepa1: dole.preparacion1,
                prepa2: dole.preparacion2,
                prepa3: dole.preparacion3,
                prepa4: dole.preparacion4,
                ingre: dole.ingrediente,
                ingre1: dole.ingrediente1,
                ingre2: dole.ingrediente2,
                titleReceta: dole.tituloReceta,
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

        if(vista === 'pantalla5') {
            const {value} = this.state;
            return (
                <Prevencion
                    navegar={this.cambiarPantalla}
                    cambiarText={this.handledtext}
                    nombre={value}
                    data = {dolenciaDatos}
                />
            );
        }

        if(vista === 'pantalla6') {
            const {value} = this.state;
            return (
                <Precacion
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