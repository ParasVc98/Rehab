import React, {Component} from 'react';
import {Text,View,ScrollView} from 'react-native';
import styles from './styles';
import {Card} from 'react-native-elements';
import {robotoWeights} from 'react-native-typography';

const name = "Cigarettes";
const dose_size = "5";
const dose_type = "packets";
const time_period = "5";
const time_type = "days";
const spent = "200";
const currency = "rupees";
const weeklyProgress = "1.3%";

class Poison extends Component {
    render(){
        return(

            <ScrollView>
            
            <Text style={[styles.mainText,robotoWeights.bold]}>Good Morning, here are your stats:</Text>

            <Card 
                title= {name}
                titleStyle = {styles.titleText} 
                wrapperStyle = {styles.wrapper}
                containerStyle={styles.container}
                dividerStyle = {styles.divider}>
                    <Text style = {styles.text}>In the past <Text style={styles.number}>{time_period} {time_type}</Text>, you averaged <Text style={styles.number}>{dose_size}</Text> {dose_type} of {name} a day. </Text>
                    <Text style = {styles.text}>You spent <Text style={styles.number}>{spent} {currency}</Text> on the {name} this week!</Text>
                    <Text style = {styles.text}>Your weekly progress is <Text style={styles.number}>{weeklyProgress}</Text>.</Text>
            </Card>
            
            </ScrollView>
            

        );
    };
}

export default Poison;
