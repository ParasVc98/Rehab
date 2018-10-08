import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '../components/container';
import { InputText } from '../components/input';
import { SButton } from '../components/button';
import { KeyboardAvoidingView, Text, View } from 'react-native';

import { DoseSizeChange, NoOfDosesChange, PriceOfDoseChange, TimePeriodChange, register, submit } from '../actions/register';


class Register2 extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        doseSize: PropTypes.string,
        noOfDoses: PropTypes.string,
        priceOfDose: PropTypes.string,
        timePeriod: PropTypes.string,

        poison: PropTypes.string,
        doseType: PropTypes.string,
        currency: PropTypes.string,
        timeType: PropTypes.string,


    };
    handleDoseSizeChange = (text) => {
        this.props.dispatch(DoseSizeChange(text));
    };
    handleNoOfDosesChange = (text) => {
        this.props.dispatch(NoOfDosesChange(text));
    };
    handlePriceOfDoseChange = (text) => {
        this.props.dispatch(PriceOfDoseChange(text));
    };
    handleTimePeriodChange = (text) => {
        this.props.dispatch(TimePeriodChange(text));
    };

    handlePoisonPress = () => {
        const { navigation } = this.props;
        navigation.navigate('PoisonList', { title: 'Poisons' });
    };
    handleDosePress = () => {
        const { navigation } = this.props;
        navigation.navigate('DoseList', { title: 'Quantity Type' });
    };
    handleCurrencyPress = () => {
        const { navigation } = this.props;
        navigation.navigate('CurrencyList', { title: 'Currencies' });
    };
    handleTimePress = () => {
        const { navigation } = this.props;
        navigation.navigate('TimeList', { title: 'Time Unit' });
    };

    handleRegisterPress = () => {
        this.props.dispatch(register());

        this.props.navigation.navigate('SignedIn');

    };
    handleSubmitPress = () => {
        this.props.dispatch(submit());
    };

    render() {
        return (
            <Container>
                <KeyboardAvoidingView behavior="padding">

                    <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>What is your poison?</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'normal', textAlign: 'center', color: 'white' }}>(Fill the form corresponding to each and press submit)</Text>

                    <View
                        style={{
                            marginTop: '3%',
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                        <SButton text={this.props.poison} onPress={this.handlePoisonPress} />
                    </View>
                    <View style={{
                        marginTop: '2%',
                        marginBottom: '2%',
                        marginLeft: '5%',
                        marginRight: '5%',
                    }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',

                            }}>
                            <View style={{
                                width: '70%',
                            }}>
                                <InputText value={this.props.doseSize} holder="Enter dose size" onChangeText={(text) => this.handleDoseSizeChange(text)} />
                            </View>
                            <View style={{
                                width: '30%',
                            }}>
                                <SButton text={this.props.doseType} onPress={this.handleDosePress} />
                            </View>
                        </View>
                        <View style={{
                            width: '70%',
                        }}>
                            <InputText value={this.props.noOfDoses} holder="Enter number of doses taken in a day" onChangeText={(text) => this.handleNoOfDosesChange(text)} />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',

                            }}>
                            <View style={{
                                width: '70%',
                            }}>
                                <InputText value={this.props.priceOfDose} holder="Enter price per unit" onChangeText={(text) => this.handlePriceOfDoseChange(text)} />
                            </View>
                            <View style={{
                                width: '30%',
                            }}>
                                <SButton text={this.props.currency} onPress={this.handleCurrencyPress} />
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',

                            }}>
                            <View style={{
                                width: '70%',
                            }}>
                                <InputText value={this.props.timePeriod} holder="Enter duration of addiction" onChangeText={(text) => this.handleTimePeriodChange(text)} />
                            </View>
                            <View style={{
                                width: '30%',
                            }}>
                                <SButton text={this.props.timeType} onPress={this.handleTimePress} />
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginBottom: '7%',


                        }}>
                        <SButton text="                                 Submit                              " onPress={this.handleSubmitPress} />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',

                        }}>
                        <SButton text="Register" onPress={this.handleRegisterPress} />
                    </View>
                </KeyboardAvoidingView>

            </Container >
        );
    }
}
const mapStateToProps = (state) => {
    const doseSize = state.register.doseSize;
    const noOfDoses = state.register.noOfDoses;
    const priceOfDose = state.register.priceOfDose;
    const timePeriod = state.register.timePeriod;

    const poison = state.register.poison;
    const doseType = state.register.doseType;
    const currency = state.register.currency;
    const timeType = state.register.timeType;

    return {
        doseSize,
        noOfDoses,
        priceOfDose,
        timePeriod,

        poison,
        doseType,
        currency,
        timeType,
    };
};
export default connect(mapStateToProps)(Register2);