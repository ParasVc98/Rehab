import React, {Component} from 'react';
import {Text,View} from 'react-native';
import styles from './styles';

const name = "Vyom Dutt Sharma";
const dose_size = "5";
const dose_type = "Cigarettes";
const time_window = "5 days";
const timeLifetime = " 20 days";
const spent = "200";
const spentLifetime = "3000";
const currency = "rupees";
const weeklyProgress = "1.3%";
const lifetimeProgress = "20%";

class Poison extends Component {
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.titleText}>Hi {name}, here are your stats:</Text>


            <Text style={styles.secondTitleText}>WEEKLY STATS</Text>

            <Text style={styles.baseText}>In the past {time_window}, you averaged <Text style={styles.number}>{dose_size} </Text>{dose_type} a day.</Text>
            <Text style = {styles.baseText}>You saved <Text style={styles.number}>{spent} </Text>{currency} this week.</Text>
            <Text style = {styles.baseText}>Your weekly progress is <Text style={styles.number}>{weeklyProgress}.</Text></Text>


            <Text style={styles.secondTitleText}>LIFETIME STATS</Text>

            <Text style={styles.baseText}>In the past {timeLifetime}, you averaged <Text style={styles.number}>{dose_size} </Text>{dose_type} a day.</Text>
            <Text style = {styles.baseText}>You have saved <Text style={styles.number}>{spent} </Text>{currency} till now!</Text>
            <Text style = {styles.baseText}>Your lifetime progress is <Text style={styles.number}>{lifetimeProgress}.</Text></Text>
            </View>
        );
    };
}

export default Poison;