import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from './styles';
import { Card } from 'react-native-elements';

class Poison extends Component {
    render() {
        const {
            name,
            dose_size,
            dose_type,
            no_of_doses,
            price_of_doses,
            currency,
            time_period,
            time_type,
            avg_value,
            alpha,
            progress,
            counter,
            spent,
            total,
        } = this.props.poison;
        const old_avg = no_of_doses * dose_size;
        const saved = ((old_avg - avg_value) * price_of_doses);
        return (

            <Card
                title={name}
                titleStyle={styles.titleText}
                wrapperStyle={styles.wrapper}
                containerStyle={styles.container}
                dividerStyle={styles.divider}>
                <Text style={styles.text}>In the past <Text style={styles.number}>{time_period} {time_type}</Text>, you averaged <Text style={styles.number}>{old_avg} {dose_type}</Text> of {name} a day. </Text>
                <Text style={styles.text}>You had already spent <Text style={styles.number}>{spent} {currency}</Text> on <Text style={styles.number}> {total} {dose_type} </Text>of {name} when you joined us!{"\n"}</Text>
                <Text style={styles.text}>But in the past 5 days, you averaged <Text style={styles.number}>{avg_value} {dose_type}</Text> of {name} a day. </Text>
                <Text style={styles.text}>You saved <Text style={styles.number}>{saved} {currency}</Text> on {name} in those 5 days.{"\n"}</Text>
                <Text style={styles.text}>Your daily progress is <Text style={styles.number}>{progress * 100}</Text>.</Text>
            </Card >



        );
    };
}

export default Poison;
