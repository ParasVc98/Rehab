import React, { Component } from 'react';
import { Container } from '../components/container';
import { InputText } from '../components/input';
import { SButton } from '../components/button';
import { KeyboardAvoidingView, Text } from 'react-native';
import { usernameChange, passwordChange } from '../actions/register';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';


class Login extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        username: PropTypes.string,
        password: PropTypes.string,
    }
    handleUsernameChange = (text) => {
        this.props.dispatch(usernameChange(text));
    };
    handlePasswordChange = (text) => {
        this.props.dispatch(passwordChange(text));
    };
    handleLoginPress = () => { };
    handleRegisterPress = () => {
        this.props.navigation.navigate('Register1');

    };

    render() {
        return (
            <Container>
                <KeyboardAvoidingView behavior="padding">

                    <InputText value="User Name" onChangeText={(text) => this.handleUsernameChange(text)} />
                    <InputText value="Password" onChangeText={(text) => this.handlePasswordChange(text)} />
                    <SButton text="Login" onPress={this.handleLoginPress} />
                    <Text>Not a user, register right now!</Text>
                    <SButton text="Register" onPress={this.handleRegisterPress} />
                </KeyboardAvoidingView>

            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    const username = state.register.username;
    const password = state.register.password;

    return {
        username,
        password,
    };
};
export default connect(mapStateToProps)(Login);