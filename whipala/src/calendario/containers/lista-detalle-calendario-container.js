import React, {Component} from 'react';
import ListaNotificacion from './../components/lista-detalle-calendario';

class ListaNotificacionContainer extends Component {

    constructor(props){
        super(props);

       const { farmacia: noti } = this.props.route.params;

        this.state = {
            farmaciaDatos: { 
                titulo: noti.nombre,
                correoE: noti.correo,
                descripcion:noti.descripcion,
                telefono: noti.telefono,
                whatsApp: noti.whatsApp,
                direccion: noti.direccion,
            },
            listaOpcion: noti.listaProducto,
        }
    }

    render(){

        const {listaOpcion, farmaciaDatos} = this.state 

        return(
            <ListaNotificacion
                data = {listaOpcion}
                headers = {farmaciaDatos}
            />
        );
        
    }

}

export default ListaNotificacionContainer;