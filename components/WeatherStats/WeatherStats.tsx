import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ImageBackground, View, Text, ScrollView } from 'react-native';
import { useFonts, RobotoMono_400Regular } from '@expo-google-fonts/roboto-mono';
import { Sen_700Bold } from '@expo-google-fonts/sen';
import { AppLoading } from 'expo';

import Header from '../Header/Header';
import WeatherCard from './WeatherCard';

import RootStackParamList from '../../types/RootStackParamList';

import styles from './WeatherStats.styles';

interface CheckinProps {
    route: RouteProp<RootStackParamList, "weatherstats">;
    navigation: StackNavigationProp<RootStackParamList, "weatherstats">;
}

const Checkin: React.FC<CheckinProps> = ({ navigation, route: { params: {weather, request} } }) => {

    let [fontsloaded] = useFonts({
        RobotoMono_400Regular,
        Sen_700Bold
    })
    if(!fontsloaded)
        return <AppLoading />
    else
        return (
            <ImageBackground source={require("../../assets/weather.jpg")} style={styles.img}>
                <View style={styles.intermediate}>
                    <Header goBack={() => navigation.goBack()} />
                    <View style={styles.boxcontainer}>
                        <Text style={styles.title} >{request.query}</Text>
                        <ScrollView style={{flex: 1}} contentContainerStyle={styles.box}>           
                            {
                                weather.map((w, index) => {
                                    return (
                                        <WeatherCard key={`weatherInfo_${index}`} city={request.query.split(',')[0]} weather={w} />
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        )
}

export default Checkin;
