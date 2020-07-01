import React, {useEffect} from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home/Home';
import Checkin from './components/Checkin/Checkin';

const App: React.FC = () => {
    
    useEffect(() => {
        StatusBar.setBarStyle("light-content");
        StatusBar.setBackgroundColor("black");
    }, []);


    const { Navigator, Screen } = createStackNavigator();

    
    return (
        <View style={styles.container}>
            <StatusBar />
            <NavigationContainer>
                <Navigator initialRouteName="home" screenOptions={{ headerShown: false }} >
                    <Screen options={{gestureDirection:"horizontal"}} name="home" component={Home} />
                    <Screen name="checkin" component={Checkin} />
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