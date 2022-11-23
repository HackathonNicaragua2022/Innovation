import React, {Component} from 'react';

import App1 from './../component/App1'
import App2 from './../component/App2'

class ListaFarmaciaContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            navegacion: 'false'            
        }
    }
      
    render(){

        const {navegacion} = this.state;
        if(navegacion === 'false'){
            return(
                <App1/>
            );

            
        } else{
            return(
                <App2/>
            );
        }
        
    }

}

export default ListaFarmaciaContainer;