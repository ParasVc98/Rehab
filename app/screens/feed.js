import React, { Component } from 'react';
import { Container } from '../components/container';
import PropTypes from 'prop-types';
import { Text, Alert, View, KeyboardAvoidingView } from 'react-native';
import { deviceStorage } from '../config/storage';
import { MasterButton } from '../components/masterButton';
import { InputText } from '../components/input';
import { connect } from 'react-redux';
import { sublog, LogChange } from '../actions/register';
import { SignOutButton } from '../components/signOutButton';
import { AddButton } from '../components/addButton';

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

    handleAddPress = () => {
        const { navigation } = this.props;
        navigation.navigate('Add');
    };

    render() {
        return (
            <Container>
                <SignOutButton onPress={this.handleSignOutPress} />
                <Text style={textStyle}>Daily Log</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <MasterButton text={this.props.poison} onPress={this.handlePoisonPress} containerViewStyle={{ width: '90%', marginRight: 0, marginLeft: 0, borderRadius: 4 }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <InputText value={this.props.log} holder="Enter today's consumption" onChangeText={(text) => this.handleLogChange(text)} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <MasterButton text="Submit" onPress={this.handleSubmitPress} containerViewStyle={{ width: '90%', marginRight: 0, marginLeft: 0, borderRadius: 4 }} />
                </View>
                <AddButton onPress={this.handleAddPress} />
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