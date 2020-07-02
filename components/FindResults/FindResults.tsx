import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import {useFonts, Sen_400Regular, Sen_700Bold } from '@expo-google-fonts/sen';
import { AppLoading } from 'expo';

import Header from '../Header/Header';
import MapFrame from './MapFrame';

import styles from './FindResults.styles';
import { ScrollView } from 'react-native-gesture-handler';

import RootStackParamList from '../../types/RootStackParamList';

interface FindResultsProp {
    navigation: StackNavigationProp<RootStackParamList, 'findresults'>;
    route: RouteProp<RootStackParamList, 'findresults'>;
}

const FindResults: React.FC<FindResultsProp> = ({ navigation, route }) => {

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
                    <Text style={styles.title}>We found <Text style={styles.number}>{route.params.length}</Text> match(es)</Text>
                        <ScrollView style={styles.box}>                            
                            {
                                route.params.map((person, index) => {
                                    return (
                                        <View key={`person_${index}`} style={styles.dashed}>
                                            <View style={styles.sep}>
                                                <Text style={styles.name}>{person.name}</Text>
                                            </View>
                                            <View style={styles.info}>
                                                <View style={styles.infosep}>
                                                    <Text style={styles.lef}>First Name : </Text>
                                                    <Text style={styles.rig}>{person.available.firstName}</Text>
                                                </View>
                                                <View style={styles.infosep}>
                                                    <Text style={styles.lef}>Last Name : </Text>
                                                    <Text style={styles.rig}>{person.available.familyName}</Text>
                                                </View>
                                                <View style={styles.infosep}>
                                                    <Text style={styles.lef}>City (provided by the user) : </Text>
                                                    <Text style={styles.rig}>{person.available.city}</Text>
                                                </View>
                                                <View style={styles.infosep}>
                                                    <Text style={styles.lef}>Status : </Text>
                                                    <Text style={styles.rig}>{person.available.status}</Text>
                                                </View>
                                                <View style={styles.infosep}>
                                                    <Text style={styles.lef}>Organization : </Text>
                                                    <Text style={styles.rig}>{person.available.org}</Text>
                                                </View>
                                            </View>
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