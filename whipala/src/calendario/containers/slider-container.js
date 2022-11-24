import React, {Component} from 'react';
import {
    View,
    Image, 
    StyleSheet,
    ScrollView,
    Dimensions,
    Text
} from 'react-native';

import Slider from './../components/slider';

class SliderContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            images: [
                'https://www.paulamedicinachina.cl/wp-content/uploads/2020/02/Captura-de-pantalla-2016-03-27-a-las-17.54.04.png',
                'https://mejorconsalud.as.com/wp-content/uploads/2018/03/shiautsu.jpg'
            ],
            active: 0
        };
    }

    change = ({nativeEvent}) =>{
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide !== this.state.active){
            this.setState({
                active: slide
            })
        }
    }

    render(){

        const { active, images} = this.state;

        return(
            <Slider
                images = {images}
                active = {active}
                change = {this.change}
            />
        );
    }
}


export default SliderContainer;