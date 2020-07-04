import React from 'react';
import { ImageBackground, View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Sen_400Regular } from '@expo-google-fonts/sen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import styles from './Home.styles';

interface HomeProps {
    navigation: StackNavigationProp<any>;
    route: RouteProp<any, string>;
}

const Home: React.FC<HomeProps> = ({navigation}) => {

    let [fontsloaded] = useFonts({
        Sen_400Regular
    });


    const panels = [{to: "checkin", uri: require("../../assets/backgrounds/checkin.jpg"), title: "CHECKIN"},{to: "find", uri: require("../../assets/backgrounds/find.jpg"), title: "FIND SOMEONE"},{to: "weather", uri: require("../../assets/backgrounds/weather.jpg"), title: "WEATHER"},{to: "partner", uri: require("../../assets/backgrounds/partner.jpg"), title: "PARTNER UP"}]


    if(!fontsloaded) {
        return <AppLoading />
    } else {
        return (
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}} scrollEnabled={true}>
                {
                    panels.map((p, index) => {
                        return (
                            <View key={`panel_${index}`} style={{...styles.panel, borderBottomWidth: index>2 ? 0 : 2 }}>
                                <ImageBackground source={p.uri} style={styles.img}>
                                    <View style={styles.intermediate}>
                                        <TouchableHighlight underlayColor={"rgba(0, 0, 0, 0.7)"} onPress={() => navigation.navigate(p.to)} style={styles.btn}>
                                            <Text style={styles.btnText} >{p.title}</Text>
                                        </TouchableHighlight>
                                    </View>
                                </ImageBackground>
                            </View>
                        )
                    })
                }
            </ScrollView>
        );
    }
}

export default Home;