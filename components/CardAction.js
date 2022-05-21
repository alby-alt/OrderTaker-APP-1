import * as React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { AppRegistry } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
import App from '../App';

function MyCardAction() {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'center',
                justifyContent: 'center'
            }}
        >
            <PaperProvider>
                <App/>
            </PaperProvider>
        </View>
    )
}

export default MyCardAction;