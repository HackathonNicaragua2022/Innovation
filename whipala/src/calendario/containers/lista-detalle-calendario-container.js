import React, {Component} from 'react';
import ListaNotificacion from './../components/lista-detalle-calendario';

class ListaNotificacionContainer extends Component {

    constructor(props){
        super(props);

       const { farmacia: noti } = this.props.route.params;

        this.state = {
            farmaciaDatos: { 
                titulo: noti.nombre,
                especial: noti.especialista,
                educac: noti.educacion,
                direc: noti.direccion,
                fond: noti.fondo,
                avata: noti.avatar,
                skill: noti.skill,
                skill2: noti.skill2,
                skill3: noti.skill3,
                skill4: noti.skill4,
                skill5: noti.skill5,
                servicio_1: noti.servicio1,
                servicio_2: noti.servicio2,
                servicio_3: noti.servicio3,
                descrip: noti.descipcion
            },
            listaImage: noti.banner,
        }
    }

    render(){

        const {listaOpcion, farmaciaDatos, listaImage} = this.state 

        return(
            <ListaNotificacion
                data = {listaOpcion}
                headers = {farmaciaDatos}
                listImage = {listaImage}
            />
        );
        
    }

}

export default ListaNotificacionContainer;