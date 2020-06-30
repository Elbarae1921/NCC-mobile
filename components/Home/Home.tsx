import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Sen_400Regular } from '@expo-google-fonts/sen';

import styles from './Home.styles';

const Home = () => {

    let [fontsloaded] = useFonts({
        Sen_400Regular
    });

    if(!fontsloaded) {
        return <AppLoading />
    } else {
        return (
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}} scrollEnabled={true}>
                <View style={styles.panel}>
                    <ImageBackground source={require("../../assets/checkin.jpg")} style={styles.img}>
                        <View style={styles.intermediate}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText} >CHECKIN</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.panel}>
                    <ImageBackground source={require("../../assets/find.jpg")} style={styles.img}>
                        <View style={styles.intermediate}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText} >FIND SOMEONE</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.panel}>
                    <ImageBackground source={require("../../assets/weather.jpg")} style={styles.img}>
                        <View style={styles.intermediate}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText} >WEATHER</Text>
                            </TouchableOpacity>                            
                        </View>
                    </ImageBackground>
                </View>
                <View style={{...styles.panel, borderBottomWidth: 0}}>
                    <ImageBackground source={require("../../assets/partner.jpg")} style={styles.img}>
                        <View style={styles.intermediate}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnText} >PARTNER</Text>
                            </TouchableOpacity>                            
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        );
    }
}

export default Home;