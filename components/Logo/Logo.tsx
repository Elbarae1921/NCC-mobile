import React from 'react';
import { View, Text } from 'react-native';
import { useFonts, RobotoMono_400Regular } from '@expo-google-fonts/roboto-mono';
import { AppLoading } from 'expo';

import styles from './Logo.styles';

interface LogoProps {
    black?: boolean;
}

const Logo: React.FC<LogoProps> = ({ black=false }) => {

    let [fontsloaded] = useFonts({
        RobotoMono_400Regular
    });

    const containerStyle = black ? {...styles.container, backgroundColor: "black"} : styles.container;

    if(!fontsloaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={containerStyle}>
                <View style={styles.abbrcontainer}>
                    <View style={styles.text}>
                        <Text style={styles.abbr}>NCC</Text>
                    </View>
                    <View style={styles.border}></View>
                </View>
                <View style={styles.titlecontainer}>
                    <Text style={styles.title}>National Catastrophe Center</Text>
                </View>
            </View>
        )
    }
}

export default Logo
