import React  from "react";

import { View, Text } from "react-native";

const ListaNotificacionDetalle = ( props ) =>{

    const {data} = props;

    return(
        <View>
            <Text style = {{color: 'green'}}>
                {data.titulo}
            </Text>
        </View>
    )
}

export default ListaNotificacionDetalle;