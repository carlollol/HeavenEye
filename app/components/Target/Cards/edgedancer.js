import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

export default class Edgedancer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Edgedancer",
            id: "0010",
            played: false,
            value: 3,
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
                    source= {require('./imgs/card_0010_edgedancer.png')}
                    style= {styles.image}
                />
            </View>
        );
    }
}

export const edgedancerId = '0010';