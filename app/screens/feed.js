import React, { Component } from 'react';
import { Container } from '../components/container';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
class Feed extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    render() {
        return (
            <Container>
                <Text> you logged in, this is your feed</Text>
            </Container>
        );
    }
}

export default Feed;