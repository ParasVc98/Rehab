import {StyleSheet,Dimensions} from 'react-native';
import {human} from 'react-native-typography';

const cardWidth = Dimensions.get('window').width/2;
const cardHeight = Dimensions.get('window').height/2;

export default StyleSheet.create({
    container: {
        borderWidth: 0,
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#F3E5F5',
        borderRadius: 4,
    },

    number: {
        fontWeight: 'bold',
        color: '#673AB7',
    },

    divider: {
        backgroundColor: '#000',
    },

    titleText: {
        textAlign: 'left',
        fontWeight: '500',
        fontSize: 24,
        color: '#880E4F',


    },

    text: {
        textAlign: 'left',
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 3,

    },

    mainText: {
        marginTop: 40,
        marginBottom: 20,
        textAlign: 'left',
        marginLeft: 15,
        marginRight: 15,
        fontFamily: 'Roboto',
        fontSize: 25,
        color: '#F3E5F5',
    },

});