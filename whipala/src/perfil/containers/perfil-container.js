import React, {Component} from 'react';

import ListaNotificacion from './../components/perfil-component';

class ListaNotificacionContainer extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ListaNotificacion/>
        );
        
    }
}

export default ListaNotificacionContainer;