import React, {Component} from 'react';
import auth from '@react-native-firebase/auth';

import Calendario from './../../login/component/login-component';

class ListaFarmaciaContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
        }
    }

      navegar = () => {
        this.props.navigation.navigate('MenuTabs')} 
      
    render(){

        return(
            <Calendario
            navegar = {this.navegar}
            />
        );
        
    }

}

export default ListaFarmaciaContainer;