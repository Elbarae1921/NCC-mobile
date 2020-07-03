import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ImageBackground, View, Text, ActivityIndicator } from 'react-native';
import { useFonts, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import { AppLoading } from 'expo';

import Header from '../Header/Header';
import Input from '../Input/Input';
import Button from '../Button/Button';

import RootStackParamList from '../../types/RootStackParamList';

import styles from './Checkin.styles';

interface CheckinProps {
    navigation: StackNavigationProp<RootStackParamList, "checkin">;
}

const Checkin: React.FC<CheckinProps> = ({ navigation }) => {

    const [spin, setSpin] = useState(false);

    let [fontsloaded] = useFonts({
        RobotoMono_700Bold
    });

    const timeout = (ms: number): Promise<any> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const submit = async() => {
        setSpin(true);
        await timeout(1000);
        setSpin(false);
        navigation.navigate("checkinconfirmation", 
        {
                name: "DOE John",
                available: {
                    firstName: "John",
                    familyName: "Doe",
                    city: "Boston",
                    fromOrg: true,
                    org: "FEMA",
                    status: "safe",
                    familyMembers: []
                },
                location: {
                    city: "Agadir",
                    country: "MA",
                    ip: "13.56.310.35",
                    latitude: "30.213",
                    longitude: "7.467",
                    region: "06",
                    timezone: "Africa/Casablance"
                }
        });
    }

    if(!fontsloaded)
        return <AppLoading />
    else
        return (
            <ImageBackground source={require("../../assets/checkin.jpg")} style={styles.img}>
                <View style={styles.intermediate}>
                    <Header goBack={() => navigation.goBack()} />
                    <View style={styles.boxcontainer}>
                        <View style={styles.box}>                            
                            <Text style={styles.title}>Please enter your information</Text>
                            <View style={styles.subcontainer}>
                                <View style={styles.inputcontainer}>
                                    <Input placeholder="Family Name..." onChangeText={() => {}} textContentType="familyName"/>
                                </View>
                                <View style={styles.inputcontainer}>
                                    <Input placeholder="First Name..." onChangeText={() => {}} textContentType="givenName" />
                                </View>
                                <View style={styles.inputcontainer}>
                                    <Input placeholder="City..." onChangeText={() => {}} textContentType="addressCity" />
                                </View>
                            </View>
                            <View style={styles.inputcontainer}>
                                <Button text="Submit" onPress={submit} />
                            </View>
                            <View style={{...styles.inputcontainer, display: spin ? "flex" : "none"}}>
                                <ActivityIndicator color="#fff" />
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
}

export default Checkin;
