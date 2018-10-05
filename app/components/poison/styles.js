import {StyleSheet,Dimensions} from 'react-native';
import {human} from 'react-native-typography';

const cardWidth = Dimensions.get('window').width/2;
const cardHeight = Dimensions.get('window').height/2;

export default StyleSheet.create({
    container: {
        borderWidth: 0,
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 4,
    },

    wrapper: {
        
    },

    titleText: {
        textAlign: 'left',
        fontWeight: '500',
        fontSize: 24,
        color: '#673AB7',


    },

    text: {
        textAlign: 'left',
        fontWeight: '400',
        fontSize: 16,

    },

    mainText: {
        marginTop: 40,
        marginBottom: 20,
        textAlign: 'left',
        marginLeft: 15,
        marginRight: 15,
        fontFamily: 'Roboto',
        fontSize: 28,
        color: 'white',
    },

});