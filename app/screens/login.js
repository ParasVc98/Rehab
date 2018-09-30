import React, { Component } from 'react';
import { Container } from '../components/container';
import { InputText } from '../components/input';
import { SButton } from '../components/button';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { usernameChange, passwordChange, login } from '../actions/register';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';


class Login extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        username: PropTypes.string,
        password: PropTypes.string,
        token: PropTypes.string,
    }
    handleUsernameChange = (text) => {
        this.props.dispatch(usernameChange(text));
    };
    handlePasswordChange = (text) => {
        this.props.dispatch(passwordChange(text));
    };
    handleLoginPress = () => {
        this.props.dispatch(login());
        if (this.props.token === "") { }
        else {
            this.props.navigation.navigate('SignedIn');
        }
    };

    handleRegisterPress = () => {
        this.props.navigation.navigate('Register1');

    };

    render() {
        return (
            <Container>
                <KeyboardAvoidingView behavior="padding">

                    <InputText value={this.props.username} onChangeText={(text) => this.handleUsernameChange(text)} />
                    <InputText value={this.props.password} onChangeText={(text) => this.handlePasswordChange(text)} />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',

                        }}>
                        <SButton text="Login" onPress={this.handleLoginPress} />

                    </View>
                    <Text>token: {this.props.token}</Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Not a user yet?</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',

                        }}>
                        <SButton text="Register" onPress={this.handleRegisterPress} />
                    </View>
                </KeyboardAvoidingView>

            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    const username = state.register.username;
    const password = state.register.password;
    const token = state.register.token;

    return {
        username,
        password,
        token,
    };
};
export default connect(mapStateToProps)(Login);