import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight, Modal, StyleSheet } from 'react-native';
import styles from './styles'

class Ghostblade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ghostblade",
            id: "0016",
            played: false,
            value: 10,
            type: "melee",
            modalVisible: false
        }    
    }

    componentWillMount(){
        console.log('this is deck!!! PAY ATTENTION TO ME');
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }


    render(){
        return(
            <View>
                <TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                    <Image
                        source= {require("./thumbs/thumb_016.png")}
                        style= {styles.thumb}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


export default Ghostblade;
export const ghostbladeId = '0016';