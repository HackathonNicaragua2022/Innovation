import React, {Component} from 'react';

import ListaNotificacion from './../components/perfil-component';

class ListaNotificacionContainer extends Component {

    constructor(props){
        super(props);
    }

    navigateFarmaciaDetalle = () => {
        this.props.navigation.navigate('Chat')
      }


    render(){
        return(
            <ListaNotificacion
            navigateFarmaciaDetalle= {this.navigateFarmaciaDetalle}/>
        );
        
    }
}

export default ListaNotificacionContainer;