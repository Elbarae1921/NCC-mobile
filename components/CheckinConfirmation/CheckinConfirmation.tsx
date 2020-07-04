import React from 'react';
import { ImageBackground, View, Text, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import {useFonts, Sen_400Regular, Sen_700Bold } from '@expo-google-fonts/sen';
import { AppLoading } from 'expo';

import Header from '../Header/Header';
import InfoBox from '../InfoBox/InfoBox';
import LocationBox from '../LocationBox/LocationBox';

import styles from './CheckinConfirmation.styles';

import RootStackParamList from '../../types/RootStackParamList';

interface CheckinConfirmationProps {
    navigation: StackNavigationProp<RootStackParamList, 'checkinconfirmation'>;
    route: RouteProp<RootStackParamList, 'checkinconfirmation'>;
}

const CheckinConfirmation: React.FC<CheckinConfirmationProps> = ({ navigation, route }) => {

    const person = route.params;

    let [fontsloaded] = useFonts({
        Sen_400Regular,
        Sen_700Bold
    });
    
    if(!fontsloaded)
        return <AppLoading />
    else
        return (
            <ImageBackground source={require("../../assets/backgrounds/checkin.jpg")} style={styles.background}>
                <View style={styles.intermediate}>
                    <Header goBack={() => navigation.goBack()} />
                    <View style={styles.boxcontainer}>
                        <ScrollView contentContainerStyle={styles.box}> 
                                <View style={styles.sep}>
                                    <Text style={styles.title}>What your loved ones will know about you</Text>
                                </View>
                                <View style={styles.dashed}>
                                    <InfoBox data={person.available} width="90%" />
                                </View>
                                <View style={styles.sep}>
                                    <Text style={styles.title}>Location info we gathered about you (please note that this info might not be accurate)</Text>
                                </View>
                                <View style={styles.dashed}>
                                    <LocationBox data={person.location} width="90%" />
                                </View>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        )
}

export default CheckinConfirmation;