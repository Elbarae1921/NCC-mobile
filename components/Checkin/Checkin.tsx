import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ImageBackground, View, Text } from 'react-native';
import { useFonts, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import { AppLoading } from 'expo';

import Header from '../Header/Header';
import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './Checkin.styles';

interface CheckinProps {
    navigation: StackNavigationProp<any>;
}

const Checkin: React.FC<CheckinProps> = ({ navigation }) => {

    let [fontsloaded] = useFonts({
        RobotoMono_700Bold
    });

    const Prev = () => {
        navigation.goBack();
    }

    if(!fontsloaded)
        return <AppLoading />
    else
        return (
            <ImageBackground source={require("../../assets/checkin.jpg")} style={styles.img}>
                <View style={styles.intermediate}>
                    <Header goBack={Prev} />
                    <View style={styles.boxcontainer}>
                        <View style={styles.box}>
                            <Text style={styles.title}>Please enter your information</Text>
                            <View style={styles.inputcontainer}>
                                <Input placeholder="Family Name..." onChangeText={() => {}} />
                            </View>
                            <View style={styles.inputcontainer}>
                                <Input placeholder="First Name..." onChangeText={() => {}} />
                            </View>
                            <View style={styles.inputcontainer}>
                                <Input placeholder="City..." onChangeText={() => {}} />
                            </View>
                            <View style={styles.inputcontainer}>
                                <Button text="Add Family Member" onPress={() => {}} />
                            </View>
                            <View style={styles.inputcontainer}>
                            <Button text="Submit" onPress={() => {}} />
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
}

export default Checkin;
