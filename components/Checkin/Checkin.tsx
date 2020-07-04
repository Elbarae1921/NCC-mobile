import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ImageBackground, View, Text, ActivityIndicator } from 'react-native';
import { useFonts, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import { AppLoading } from 'expo';

import Header from '../Header/Header';
import Input from '../Input/Input';
import Button from '../Button/Button';

import RootStackParamList from '../../types/RootStackParamList';
import { checkin } from '../../API';

import styles from './Checkin.styles';
import { Person } from '../../types/PersonType';

interface CheckinProps {
    navigation: StackNavigationProp<RootStackParamList, "checkin">;
}

const Checkin: React.FC<CheckinProps> = ({ navigation }) => {

    let [fontsloaded] = useFonts({
        RobotoMono_700Bold
    });

    const [spin, setSpin] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const updateFirstName = (text: string): void => {
        setFirstName(text);
    }

    const updateFamilyName = (text: string): void => {
        setFamilyName(text);
    }

    const updateCity = (text: string): void => {
        setCity(text);
    }

    const submit = async () => {
        setError("");

        if(firstName.length < 2 || familyName.length < 2 || city.length < 2)
            return setError("Please fill all the fields.");

        setSpin(true);
        const response = await checkin(firstName, familyName, city);
        setSpin(false);

        if(typeof response === "string")
            return setError(response);

        return navigation.navigate("checkinconfirmation", response as Person);
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
                                    <Input placeholder="Family Name..." onChangeText={updateFamilyName} textContentType="familyName"/>
                                </View>
                                <View style={styles.inputcontainer}>
                                    <Input placeholder="First Name..." onChangeText={updateFirstName} textContentType="givenName" />
                                </View>
                                <View style={styles.inputcontainer}>
                                    <Input placeholder="City..." onChangeText={updateCity} textContentType="addressCity" />
                                </View>
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
