import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import { ProgressCircle, LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
                <ScrollView>
                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="trophy-award" size={40} color="#673AB7" />
                        <Text style={styles.text} >           Congrats on joining!</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="currency-inr" size={40} color="#673AB7" />
                        <Text style={styles.text}>           Saved 100 rupees.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="currency-inr" size={40} color="#673AB7" />
                        <Text style={styles.text}>           Saved 500 rupees.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="currency-inr" size={40} color="#673AB7" />
                        <Text style={styles.text}>           Saved 1000 rupees.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="currency-inr" size={40} color="#673AB7" />
                        <Text style={styles.text}>           Saved 2000 rupees.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="currency-inr" size={40} color="#673AB7" />
                        <Text style={styles.text}>           Saved 5000 rupees.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="currency-inr" size={40} color="#673AB7" />
                        <Text style={styles.text}>           Saved 10,000 rupees.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="progress-upload" size={40} color="#673AB7" />
                        <Text style={styles.text}>           Made 5% progress.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="progress-upload" size={40} color="#673AB7" />
                        <Text style={styles.text}>           Made 10% progress.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="progress-upload" size={40} color="#673AB7" />
                        <Text style={styles.text}>           Made 25% progress.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="progress-upload" size={40} color="#673AB7" />
                        <Text style={styles.text}>           Made 50% progress.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="progress-upload" size={40} color="#673AB7" />
                        <Text style={styles.text}>           Made 75% progress.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                        <Icon name="progress-upload" size={40} color="#673AB7" />
                        <Text style={styles.text}>           Made 100% progress.</Text>
                    </View>
                </ScrollView>

            </Card >



        );
    };
}

export default Trophy;
