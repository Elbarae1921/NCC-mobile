import React, {useEffect} from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import Home from './components/Home/Home';

const App: React.FC = () => {
    
    useEffect(() => {
        StatusBar.setBarStyle("light-content");
        StatusBar.setBackgroundColor("black");
    }, []);
    
    return (
        <View style={styles.container}>
            <Home />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default App;