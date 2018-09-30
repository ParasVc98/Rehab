import React, { Component } from 'react';
import { Container } from '../components/container';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { SButton } from '../components/button';
import { deviceStorage } from '../config/storage';

class Stats extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }

    handleSignOutPress = () => {
        deviceStorage.deleteJWT();
        this.props.navigation.navigate('SignedOut');
    };

    render() {
        return (
            <Container>
                <Text> you logged in, these are your stats</Text>
                <SButton text="Sign Out" onPress={this.handleSignOutPress} />

            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return {
    };
};
export default connect(mapStateToProps)(Stats);