import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

export default class Legionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Legionnaire",
            id: "0011",
            played: false,
            value: 5,
            type: "melee",
            modalVisible: false
        }    
    }

    componentDidMount() {
        this.props.getTarget(this.state.value)
    }


    render(){
        return(
            <View>
                <Image
                    source= {require('./imgs/card_0011_legionnaire.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const legionnaireId = '0011';