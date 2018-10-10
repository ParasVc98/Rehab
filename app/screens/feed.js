import React, { Component } from 'react';
import { Container } from '../components/container';
import PropTypes from 'prop-types';
import { Text, Alert } from 'react-native';
import { deviceStorage } from '../config/storage';
import { SButton } from '../components/button';
import { InputText } from '../components/input';
import { connect } from 'react-redux';
import { sublog, LogChange } from '../actions/register';
import { SignOutButton } from '../components/signOutButton';

const textStyle = {
    fontSize: 25,
    color: 'white',
    marginBottom: 15,
};

class Feed extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        log: PropTypes.string,
        poison: PropTypes.string,
    }
    handleSignOutPress = () => {
        Alert.alert(
            'Sign Out',
            'Are you sure you want to sign out?',
            [
                {
                    text: 'Yes', onPress: () => {
                        deviceStorage.deleteJWT();
                        this.props.navigation.navigate('SignedOut');
                    }
                },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },]);

    };
    handleSubmitPress = () => {
        this.props.dispatch(sublog());
    };
    handleLogChange = (text) => {
        this.props.dispatch(LogChange(text));
    };

    handlePoisonPress = () => {
        const { navigation } = this.props;
        navigation.navigate('PoisonList', { title: 'Poisons' });
    };

    render() {
        return (
            <Container>
                <SignOutButton onPress={this.handleSignOutPress} />

                <Text style={textStyle}>Daily Log</Text>
                <SButton text={this.props.poison} onPress={this.handlePoisonPress} />

                <InputText value={this.props.log} holder="Enter today's consumption" onChangeText={(text) => this.handleLogChange(text)} />
                <SButton text="                                Submit                             " onPress={this.handleSubmitPress} />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const poison = state.register.poison;
    const log = state.register.log;

    return {
        poison,
        log,
    }
}

export default connect(mapStateToProps)(Feed);