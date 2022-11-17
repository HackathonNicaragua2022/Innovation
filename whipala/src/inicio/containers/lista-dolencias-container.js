import React, {Component} from 'react';

import ListaDolencias from './../components/lista-dolencias-inicio-component';

class ListaDolenciasContainer extends Component {

    constructor(props){
        super(props);

        this.state = {

            data: [
                {
                    key: 1,
                    enfermedad: 'Anemia',
                    imagen: require('./../../assets/banner.jpg'),
                    icono: require('./../../assets/enfermedad-autoinmune.png'),
                },
                {
                    key: 2,
                    enfermedad: 'Asma',
                    imagen: require('./../../assets/banner2.jpg'),
                    icono: require('./../../assets/enfermedad-autoinmune.png'),
                },
                {
                    key: 3,
                    enfermedad: 'Anciedad',
                    imagen: require('./../../assets/banner3.jpg'),
                    icono: require('./../../assets/enfermedad-autoinmune.png'),
                },
        ]
            
        }
    }

    render(){

        const {data} = this.state

        return(
            <ListaDolencias
                data = {data}
            />
        );

    }
}

export default ListaDolenciasContainer;