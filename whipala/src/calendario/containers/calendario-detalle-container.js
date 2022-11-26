import React, {Component} from 'react';

import NuevaCita from './../components/calendario';

class NuevaCitaContainer extends Component {

    constructor(props){
        super(props);
        const { datalle: deta } = this.props.route.params;

        this.state = {
            calendarioDatos: { 
                titulo: deta.nombre,
                avatar: deta.avatar,
                especialista: deta.especialista,
                fecha: deta.fecha,
                hora: deta.hora,
                direc: deta.direccion,
            },
        }
    }


    render(){

        const {calendarioDatos} = this.state;

        return(
            <NuevaCita
                data = {calendarioDatos}
            />  
        );
    }
}


export default NuevaCitaContainer;