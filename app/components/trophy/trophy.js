import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import { ProgressCircle, LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { Card } from 'react-native-elements';

class Trophy extends Component {
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
            stats,
        } = this.props.poison;
        let result = stats.map(a => a.dose_size);


        const old_avg = no_of_doses * dose_size;
        const saved = ((old_avg - avg_value) * price_of_doses);
        return (

            <Card
                title={"In your fight against " + name.toLowerCase()}
                titleStyle={styles.titleText}
                wrapperStyle={styles.wrapper}
                containerStyle={styles.container}
                dividerStyle={styles.divider}>
                <Image style={styles.image} resizeMode='contain' source={require('./trophy.png')}></Image>

            </Card >



        );
    };
}

export default Trophy;
