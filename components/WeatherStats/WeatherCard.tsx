import React from 'react';
import { View, Text, Image } from 'react-native';

import { Weather } from '../../types/WeatherType';

import styles from './WeatherStats.styles';
import WeatherMap from './WeatherCodeMap';

interface WeatherCardProps {
    weather: Weather;
    city: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather, city }) => {
    return (
        <View style={styles.cardcontainer}>
            <Image width={100} height={50} style={styles.cardimg} source={WeatherMap.get(weather.weatherCode) || require('../../assets/weather_icons/partlycloudy.png')} />
            <View style={styles.cardsep}>
                <Text style={styles.temp}>{weather.avgTemp}º</Text>
            </View>
            <View style={styles.cardsep}>
                <Text style={styles.city}>{city}</Text>
            </View>
            <View style={styles.cardsep}>
                <Text style={styles.date}>{weather.date}</Text>
            </View>
        </View>
    )
}

export default WeatherCard
