import React, {Component} from 'react';

import ListaPlantas from './../components/lista-plantas-inicio-component';

class ListaPlantasContainer extends Component {

    constructor(props){
        super(props);

        this.state = {

            data: [
                {   key: 1,
                    titulo: 'Savila',
                    imagenF: require('./../../assets/banner.jpg'),
                    icono: require('./../../assets/enfermedad-autoinmune.png'),
                },
                {
                   key: 2,
                    titulo: 'Limon',
                    imagenF: require('./../../assets/banner.jpg'),
                    icono: require('./../../assets/enfermedad-autoinmune.png'),
                },
                {
                    key:3,
                    titulo: 'Sacate',
                    imagenF: require('./../../assets/banner.jpg'),
                    icono: require('./../../assets/enfermedad-autoinmune.png'),
                },
            ]
            
        }
    }

    render(){

        const {data} = this.state;

        return(
            <ListaPlantas
                data = {data} 
            />
        );

    }
}

export default ListaPlantasContainer;