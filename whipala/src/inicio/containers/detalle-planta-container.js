import React, {Component} from 'react';

import DetalleDolencia from './../components/detalle-plantas-component';
import Definicion from './../components/detalle-planta/detalle-descripcion';
import Sintomas from './../components/detalle-planta/beneficios';
import Recetas from './../components/detalle-planta/recetas-naturales';
import Curiosidad from './../components/detalle-planta/curiocidades-planta';
import Precacion from './../components/detalle-planta/precauciones';

class ListaFarmaciaContainer extends Component {

    constructor(props){
        super(props);

       const { planta: plan } = this.props.route.params;

        this.state = {
            dolenciaDatos: {
                title: plan.titulo,
                descrip: plan.descripcion,
                imagenDescrip: plan.imagenDescripcion,
                imagenBen: plan.imagenBeneficio,
                ben1: plan.beneficio1,
                ben2: plan.beneficio2,
                ben3: plan.beneficio3,
                ben4: plan.beneficio4,
                ben5: plan.beneficio5,
                ben6: plan.beneficio6,
                ben7: plan.beneficio7,
                ben8: plan.beneficio8,
                ben9: plan.beneficio9,
                ben10: plan.beneficio10,
                ben11: plan.beneficio11,
                titl: plan.tituloReceta,
                ingre1: plan.ingrediente1,
                ingre2: plan.ingrediente2,
                recet1: plan.receta1,
                recet2: plan.receta2,
                imagRecet: plan.imagenReceta,
                imagenCuri: plan.imagenCuriosidad,
                descripC: plan.descripcionCuriosidad,
                imagenPre: plan.imagenPrecaucion,
                preca1: plan.precaucion1,
                preca2: plan.precaucion2,
                preca3: plan.precaucion3,
                preca4: plan.precaucion4,
                preca5: plan.precaucion5,
                dosis: plan.dosis,
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
                <Curiosidad
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