import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from '../screens/login';
import Register1 from '../screens/register1';
import Register2 from '../screens/register2';
import CurrencyList from '../screens/currencies';
import DoseList from '../screens/doses';
import PoisonList from '../screens/poisons';
import TimeList from '../screens/times';

const Register2Stack = createStackNavigator({
    Register2: {
        screen: Register2,


    },
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
    DoseList: {
        screen: DoseList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
    PoisonList: {
        screen: PoisonList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    },
    TimeList: {
        screen: TimeList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    }
}, {
        mode: 'modal',
        cardStyle: { paddingTop: StatusBar.currentHeight },
        headerMode: 'none',
    }
);
export default createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: () => null,
        },
    },
    Register1: {
        screen: Register1,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#af2b07', borderBottomWidth: 0, },
        },

    },
    Register2: {
        screen: Register2Stack,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#af2b07', borderBottomWidth: 0, },
        },
    }
}, {
        headerMode: 'screen',
    });

