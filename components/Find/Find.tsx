import React, { useState } from 'react';
import { ImageBackground, View, Text, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import { AppLoading } from 'expo';

import Header from '../Header/Header';
import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './Find.styles';

import RootStackParamList from '../../types/RootStackParamList';
import { Person } from '../../types/PersonType';
import { find } from '../../API';

interface FindProps {
    navigation: StackNavigationProp<RootStackParamList, 'find'>;
}

const Find: React.FC<FindProps> = ({ navigation }) => {

    let [fontsloaded] = useFonts({
        RobotoMono_700Bold
    });

    const [spin, setSpin] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const search = async () => {
        setError("");

        if(firstName.length < 2 && familyName.length < 2 && city.length < 2)
            return setError("Please fill at least one field.");

        setSpin(true);
        const response = await find(firstName, familyName, city);
        setSpin(false);

        if(typeof response === "string")
            return setError(response);

        return navigation.navigate("findresults", response);
    }

    if(!fontsloaded)
        return <AppLoading />
    else
        return (
            <ImageBackground source={require('../../assets/backgrounds/find.jpg')} style={styles.background}>
                <View style={styles.intermediate}>
                    <Header goBack={() => navigation.goBack()} />
                    <View style={styles.boxcontainer}>
                        <View style={styles.box}>                            
                            <Text style={styles.title}>Who are you looking for?</Text>
                            <View style={styles.subcontainer}>
                                <View style={styles.inputcontainer}>
                                    <Input placeholder="Family Name..." onChangeText={setFamilyName} textContentType="familyName"/>
                                </View>
                                <View style={styles.inputcontainer}>
                                    <Input placeholder="First Name..." onChangeText={setFirstName} textContentType="givenName" />
                                </View>
                                <View style={styles.inputcontainer}>
                                    <Input placeholder="City..." onChangeText={setCity} textContentType="addressCity" />
                                </View>
                            </View>
                            <View style={styles.inputcontainer}>
                                <Button text="Search" onPress={search} />
                            </View>
                            <View style={{...styles.inputcontainer, display: spin ? "flex" : "none"}}>
                                <ActivityIndicator animating={true} color="#fff" size="small" />
                            </View>
                            <Text style={styles.error}>{error}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
}

export default Find;