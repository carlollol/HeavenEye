import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, StatusBar } from 'react-native';
import { Animated, Easing } from 'react-native';

import Target from '../components/Target';
import PlayableCards from '../components/PlayableCards';
import Timer from '../components/Timer';
import Score from './Score';

// Firebase 
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC9WpJ8YES3GzQLxkX-gbFS2v4Ot8-T2ug",
    authDomain: "heaveneye-ace6a.firebaseapp.com",
    databaseURL: "https://heaveneye-ace6a.firebaseio.com",
    projectId: "heaveneye-ace6a",
    storageBucket: "heaveneye-ace6a.appspot.com",
    messagingSenderId: "377871605720"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database().ref();

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
const timeLimit = 5000;
let animateValue = new Animated.Value(timeLimit)
    
export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGameRunning: true,
            score: 0,
            targetVal: 0,
            chosenVal: 0,
            animateValue: new Animated.Value(timeLimit)
        } 
        this.animateValue = new Animated.Value(timeLimit)
        this.scoreRef = database.child('score');
    }

     componentDidMount() {
        this.spin();
    }

    spin = () => {
        // this.setState({
        //     animateValue : this.state.animateValue.setValue(timeLimit)
        // })
        this.animateValue.setValue(timeLimit);
         Animated.timing(this.animateValue, {
            duration: timeLimit,
            easing: Easing.linear, // No easing
            toValue: 0,
        }).start(()=> {
            this.spin()
            console.log('Game Finished!!!!!!')
        });
    }
    componentWillUpdate(){

    }

    getRemainingTime(timeRemaining) {
        if(JSON.stringify(timeRemaining) === 0) {
            this.props.navigation.navigate('Score');
        }
    }

    getTargetValue(newTargetVal) {
        this.setState({
            targetVal: newTargetVal
        })
    }

    getChosenValue(newChosenVal) {
        this.setState({
            chosenVal: newChosenVal
        })
    }


    render() {
        return (
            <Image source={require('../assets/images/heaveneye_screengame_field.jpg')} style={styles.container}>
            <StatusBar hidden />
            <Timer getTime={this.getRemainingTime.bind(this)} animateValue={this.animateValue}/> 
            <Target getTarget={this.getTargetValue.bind(this)}/>
            <PlayableCards chooseValue={this.getChosenValue.bind(this)}>
            </PlayableCards>
            </Image>
        );
    }
}

