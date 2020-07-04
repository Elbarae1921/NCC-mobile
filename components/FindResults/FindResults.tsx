import React from 'react';
import { ImageBackground, View, Text, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import {useFonts, Sen_400Regular, Sen_700Bold } from '@expo-google-fonts/sen';
import { AppLoading } from 'expo';

import Header from '../Header/Header';
import MapFrame from './MapFrame';
import InfoBox from '../InfoBox/InfoBox';

import styles from './FindResults.styles';

import RootStackParamList from '../../types/RootStackParamList';

interface FindResultsProp {
    navigation: StackNavigationProp<RootStackParamList, 'findresults'>;
    route: RouteProp<RootStackParamList, 'findresults'>;
}

const FindResults: React.FC<FindResultsProp> = ({ navigation, route: { params } }) => {

    let [fontsloaded] = useFonts({
        RobotoMono_700Bold,
        Sen_400Regular,
        Sen_700Bold
    });

    if(!fontsloaded)
        return <AppLoading />
    else
        return (
            <ImageBackground source={require("../../assets/find.jpg")} style={styles.background}>
                <View style={styles.intermediate}>
                    <Header goBack={() => navigation.goBack()} />
                    <View style={styles.boxcontainer}>
                    <Text style={styles.title}>We found <Text style={styles.number}>{params.length}</Text> match(es)</Text>
                        <ScrollView contentContainerStyle={styles.box}>                            
                            {
                                params.map((person, index) => {
                                    return (
                                        <View key={`person_${index}`} style={styles.dashed}>
                                            <View style={styles.sep}>
                                                <Text style={styles.name}>{person.name}</Text>
                                            </View>
                                            <InfoBox data={person.available} width="90%" />
                                            <View style={styles.sep}>
                                                <Text style={styles.mapinf}>Please Note that location info might not be accurate.</Text>
                                            </View>
                                            <View style={styles.mapcontainer}>
                                                <MapFrame latitude={person.location.latitude} longitude={person.location.longitude} />
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        )
}

export default FindResults;