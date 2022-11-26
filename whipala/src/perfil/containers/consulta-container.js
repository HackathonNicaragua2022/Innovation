import React, {Component} from 'react';

import ListaNotificacion from './../components/chat/consulta';

class ListaNotificacionContainer extends Component {

    constructor(props){
        super(props);
    }

    onPress = () => {
        this.props.navigation.navigate('Resultado')
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