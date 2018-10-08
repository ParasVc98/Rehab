import React, { Component } from 'react';
import { Container } from '../components/container';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { deviceStorage } from '../config/storage';
import { SButton } from '../components/button';
import { InputText } from '../components/input';
import { connect } from 'react-redux';
import { sublog, LogChange } from '../actions/register';


class Feed extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        log: PropTypes.string,
        poison: PropTypes.string,
    }
    handleSignOutPress = () => {
        deviceStorage.deleteJWT();
        this.props.navigation.navigate('SignedOut');
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
                <Text> choose your poison and enter your today's consumption and press submit {this.props.log} {this.props.poison}</Text>
                <SButton text={this.props.poison} onPress={this.handlePoisonPress} />

                <InputText value={this.props.log} holder="Enter today's consumption" onChangeText={(text) => this.handleLogChange(text)} />
                <SButton text="                                 Submit                              " onPress={this.handleSubmitPress} />
                <SButton text="Sign Out" onPress={this.handleSignOutPress} />
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