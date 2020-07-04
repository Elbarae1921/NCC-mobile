import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ImageBackground, View, Text, ActivityIndicator } from 'react-native';
import { useFonts, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import { AppLoading } from 'expo';

import Header from '../Header/Header';
import Input from '../Input/Input';
import Button from '../Button/Button';

import RootStackParamList from '../../types/RootStackParamList';
import { WeatherStatsParams } from '../../types/WeatherType';
import { weather } from '../../API';

import styles from './Weather.styles';

interface CheckinProps {
    navigation: StackNavigationProp<RootStackParamList, "weather">;
}

const Checkin: React.FC<CheckinProps> = ({ navigation }) => {

    let [fontsloaded] = useFonts({
        RobotoMono_700Bold
    });

    const [spin, setSpin] = useState(false);
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const submit = async () => {
        setError("");

        if(!city)
            return setError("Please provide a city.");

        setSpin(true);
        const response = await weather(city);
        setSpin(false);

        if(typeof response === "string")
            return setError(response);

        navigation.navigate("weatherstats", response);
    }

    if(!fontsloaded)
        return <AppLoading />
    else
        return (
            <ImageBackground source={require("../../assets/backgrounds/weather.jpg")} style={styles.img}>
                <View style={styles.intermediate}>
                    <Header goBack={() => navigation.goBack()} />
                    <View style={styles.boxcontainer}>
                        <View style={styles.box}>              
                            <View style={styles.inputcontainer}>
                                <Input placeholder="City" onChangeText={setCity} textContentType="familyName"/>
                            </View>
                            <View style={styles.inputcontainer}>
                                <Button text="Submit" onPress={submit} />
                            </View>
                            <View style={{...styles.inputcontainer, display: spin ? "flex" : "none"}}>
                                <ActivityIndicator color="#fff" />
                            </View>
                            <Text style={styles.error}>{error}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
}

export default Checkin;
