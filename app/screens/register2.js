import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '../components/container';
import { InputText } from '../components/input';
import { SButton } from '../components/button';
import { KeyboardAvoidingView, Text } from 'react-native';

import { DoseSizeChange, NoOfDosesChange, PriceOfDoseChange, TimePeriodChange } from '../actions/register';


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

    handleRegisterPress = () => { };


    render() {
        return (
            <Container>
                <KeyboardAvoidingView behavior="padding">

                    <Text>What is your poison?</Text>
                    <SButton text={this.props.poison} onPress={this.handlePoisonPress} />

                    <InputText value={this.props.doseSize} onChangeText={(text) => this.handleDoseSizeChange(text)} />
                    <SButton text={this.props.doseType} onPress={this.handleDosePress} />

                    <InputText value={this.props.noOfDoses} onChangeText={(text) => this.handleNoOfDosesChange(text)} />

                    <InputText value={this.props.priceOfDose} onChangeText={(text) => this.handlePriceOfDoseChange(text)} />
                    <SButton text={this.props.currency} onPress={this.handleCurrencyPress} />

                    <InputText value={this.props.timePeriod} onChangeText={(text) => this.handleTimePeriodChange(text)} />
                    <SButton text={this.props.timeType} onPress={this.handleTimePress} />

                    <SButton text="Register" onPress={this.handleRegisterPress} />

                </KeyboardAvoidingView>

            </Container>
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