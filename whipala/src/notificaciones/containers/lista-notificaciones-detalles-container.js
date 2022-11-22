import React, {Component} from 'react';
import ListaNotificacion from './../components/lista-notificaciones-detalle';

class ListaNotificacionContainer extends Component {

    constructor(props){
        super(props);

        const { notificaciones: noti } = this.props.route.params;

        this.state = {
            notificacionDatos: {
                titulo: noti.titulo
            },
        }
    }

    render(){

        const { notificacionDatos} = this.state 

        return(
            <ListaNotificacion
                data = {notificacionDatos}
            />
        );
        
    }

}

export default ListaNotificacionContainer;