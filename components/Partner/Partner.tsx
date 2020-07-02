import React, { useState } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts, RobotoMono_700Bold, RobotoMono_400Regular} from '@expo-google-fonts/roboto-mono';
import { AppLoading } from 'expo';

import Header from '../Header/Header';
import Button from '../Button/Button';
import Login from './Login';
import Register from './Register';

interface PartnerProps {
    navigation: StackNavigationProp<any>;
}

import styles from './Partner.styles';
import { ScrollView } from 'react-native-gesture-handler';

const Partner: React.FC<PartnerProps> = ({ navigation }) => {

    let [fontsloaded] = useFonts({
        RobotoMono_400Regular,
        RobotoMono_700Bold
    });
    
    const [login, setLogin] = useState(true);

    const switchForm = () => {
        setLogin(oldState => !oldState);
    }

    let form = login ? <Login /> : <Register />;

    if(!fontsloaded)
        return <AppLoading />
    else
        return (
            <ImageBackground source={require("../../assets/partner.jpg")} style={styles.background}>
                <View style={styles.intermediate}>
                    <Header goBack={() => navigation.goBack()} />
                    <View style={styles.boxcontainer}>
                        <ScrollView contentContainerStyle={styles.box}>
                            <View style={styles.intro}>
                                <View style={styles.sep}>
                                    <Text style={styles.title}>What it means to become a partner</Text>
                                </View>
                                <View style={styles.sep}>
                                    <Text style={styles.text}>
                                        If you're an organization that helps unite victims of natural/man-made disasters with their families and loved ones, you can have unlimited access to our api, which would further the efforts in disaster prevention, and contribute to the pool of data to analyse.
                                    </Text>
                                </View>
                                <View style={styles.sep}>
                                    <View style={styles.get}>
                                        <Text style={styles.mettext}>GET</Text>
                                    </View>
                                </View>
                                <View style={styles.sep}>
                                    <ScrollView horizontal={true}>
                                        <Text style={styles.url}>https://nationalcatastrophecenter.herokuapp.com/api/person?firstName=Ben&familyName=Kenobi&city=Tatooine</Text>
                                    </ScrollView>
                                </View>
                                <View style={styles.sep}>
                                    <View style={styles.post}>
                                        <Text style={styles.mettext}>POST</Text>
                                    </View>
                                </View>
                                <View style={styles.sep}>
                                    <ScrollView horizontal={true}>
                                        <Text style={styles.url}>{`curl -H "Authorization: Bearer {YOUR_KEY}" -H "Content-Type: application/json" -d '[{"firstName":"Grimmer", "familyName":"Wolfwood", "city":"Yorknew"}]' -X POST https://nationalcatastrophecenter.herokuapp.com/api/organization/checkin`}</Text>
                                    </ScrollView>
                                </View>
                            </View>
                            <View style={styles.border}></View>
                            <View style={styles.form}>
                                <View style={styles.sep}>
                                    <Text style={styles.title}>Get a key</Text>
                                </View>
                                {form}
                                <View style={styles.sep}>
                                    <Button text="Switch to registration" onPress={switchForm} />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        )
}

export default Partner;