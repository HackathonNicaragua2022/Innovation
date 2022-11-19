import React, {Component} from 'react';

import ListaDolencia from './../components/lista-dolencias-inicio-component';

class ListaDolenciaContainer extends Component {

    constructor(props){
        super(props);

        this.state = {

            data: [
                {   key: 1,
                    enfermedad: 'Anemia',
                    imagenX: require('./../../assets/banner.jpg'),
                    descripcion: 'hola'
                },
                {
                   key: 2,
                    enfermedad: 'Cancer',
                    imagenX: require('./../../assets/banner2.jpg'),
                    descripcion: 'perro'
                },
                {
                    key:3,
                    enfermedad: 'Diavetes',
                    imagenX: require('./../../assets/banner3.jpg'),
                },
            ]
            
        }
    }

    render(){

        const {data} = this.state;

        return(
            <ListaDolencia
                data = {data} 
            />
        );

    }
}

export default ListaDolenciaContainer;