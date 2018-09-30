
import { AsyncStorage } from 'react-native';

export const deviceStorage = {
    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async loadJWT() {
        try {
            let token = await AsyncStorage.getItem('id_token');

        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async deleteJWT() {
        try {
            await AsyncStorage.removeItem('id_token');
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    }
};

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('id_token')
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};