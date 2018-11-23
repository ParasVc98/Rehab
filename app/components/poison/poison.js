import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { ProgressCircle, LineChart, YAxis, Grid } from 'react-native-svg-charts'
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
            stats,
        } = this.props.poison;
        let result = stats.map(a => a.dose_size);


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
                <ProgressCircle
                    style={{
                        paddingTop: 7,
                        height: 150
                    }}
                    progress={progress}
                    progressColor={'rgb(134, 65, 244)'}
                    backgroundColor={'#ffadf6'}
                />
                <View style={{ height: 200, flexDirection: 'row' }}>
                    <YAxis
                        data={result}
                        contentInset={{ top: 20, bottom: 20 }}
                        svg={{
                            fill: 'grey',
                            fontSize: 10,
                        }}
                        numberOfTicks={10}
                        formatLabel={value => `${value} ${dose_type}`}
                    />
                    <LineChart
                        style={{ flex: 1, marginLeft: 16 }}
                        data={result}
                        svg={{
                            stroke: 'rgb(134, 65, 244)',
                            strokeWidth: 2.5
                        }}
                        contentInset={{ top: 20, bottom: 20 }}
                    >
                    </LineChart>
                </View>
            </Card >



        );
    };
}

export default Poison;
