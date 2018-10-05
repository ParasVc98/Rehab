import React, {Component} from 'react';
import {Text,View,ScrollView} from 'react-native';
import styles from './styles';
import {Card} from 'react-native-elements';
import {human,material,robotoWeights} from 'react-native-typography';

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

            <ScrollView>
            
            <Text style={[styles.mainText,robotoWeights.bold]}>Hi {name}, here are your stats:</Text>

            <Card 
                title='Weekly Stats' 
                titleStyle = {styles.titleText} 
                wrapperStyle = {styles.wrapper}
                containerStyle={styles.container}
                dividerStyle = {styles.divider}>
                    <Text style = {styles.text}>In the past {time_window}, you averaged {dose_size} {dose_type} a day. </Text>
                    <Text style = {styles.text}>You have saved {spent} {currency} this week!</Text>
                    <Text style = {styles.text}>Your weekly progress is {weeklyProgress}.</Text>
            </Card>

            <Card 
                title='Lifetime Stats'
                titleStyle = {styles.titleText} 
                containerStyle={styles.container}>
                    <Text style={styles.text}>In the past {time_window}, you averaged {dose_size} {dose_type} a day. </Text>
                    <Text style={styles.text}>You have saved {spent} {currency} till now!</Text>
                    <Text style={styles.text}>Your lifetime progress is {lifetimeProgress}</Text>
            </Card>
            
            </ScrollView>
            

        );
    };
}

export default Poison;