import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

export default class Valkyria extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Valkyria",
            id: "0017",
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
                    source= {require('./imgs/card_0017_valkyria.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const valkyriaId = '0017';