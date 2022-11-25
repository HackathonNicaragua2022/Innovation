import React, {Component} from 'react';

import ListaNotificacion from './../components/chat/bienvenida';

class ListaNotificacionContainer extends Component {

    constructor(props){
        super(props);
    }


    onPress = () => {
        this.props.navigation.navigate('Consulta')
      }


    render(){
        return(
            <ListaNotificacion
                onPress = {this.onPress}
            />
        );
        
    }
}

export default ListaNotificacionContainer;