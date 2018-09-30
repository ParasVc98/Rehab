import React from 'react';
import PropTypes from 'prop-types';

import { TextInput, View } from 'react-native';
import styles from './styles';

const InputText = ({ value, onChangeText }) => (
    <View style={styles.container}>
        <TextInput underlineColorAndroid='transparent' autoCapitalize='none' style={styles.inputText} value={value} onChangeText={onChangeText} />
    </View>
);

InputText.propTypes = {
    value: PropTypes.string,
    onChangeText: PropTypes.func,
}

export default InputText;
