import React, {useEffect} from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home/Home';
import Checkin from './components/Checkin/Checkin';
import Find from './components/Find/Find';
import FindResults from './components/FindResults/FindResults';
import Partner from './components/Partner/Partner';
import CheckinConfirmation from './components/CheckinConfirmation/CheckinConfirmation';

import RootStackParamList from './types/RootStackParamList';

const App: React.FC = () => {
    
    useEffect(() => {
        StatusBar.setBarStyle("light-content");
        StatusBar.setBackgroundColor("black");
    }, []);


    const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

    
    return (
        <View style={styles.container}>
            <StatusBar />
            <NavigationContainer>
                <Navigator initialRouteName="home" screenOptions={{ headerShown: false }} >
                    <Screen name="home" component={Home} />
                    <Screen name="checkin" component={Checkin} />
                    <Screen name="find" component={Find} />
                    <Screen name="findresults" component={FindResults} />
                    <Screen name="partner" component={Partner} />
                    <Screen name="checkinconfirmation" component={CheckinConfirmation} />
                </Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default App;