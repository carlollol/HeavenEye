import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

export default class LegionArcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Legion Archer",
            id: "0009",
            played: false,
            value: 3,
            type: "range",
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
                    source= {require('./imgs/card_0009_legion-archer.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const legionarcherId = '0009';