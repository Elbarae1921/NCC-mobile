import React, { useState } from 'react';
import { ImageBackground, View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts, RobotoMono_700Bold, RobotoMono_400Regular} from '@expo-google-fonts/roboto-mono';
import { AppLoading } from 'expo';

import Header from '../Header/Header';
import Button from '../Button/Button';
import Login from './Login';
import Register from './Register';

import { partnerLogin, partnerRegister } from '../../API';

import styles from './Partner.styles';

interface PartnerProps {
    navigation: StackNavigationProp<any>;
}

const Partner: React.FC<PartnerProps> = ({ navigation }) => {

    let [fontsloaded] = useFonts({
        RobotoMono_400Regular,
        RobotoMono_700Bold
    });
    
    const [login, setLogin] = useState(true);
    const [spin, setSpin] = useState(false);
    const [error, setError] = useState("");
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");
    const [organization, setOrganization] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const switchForm = () => {
        setLogin(oldState => !oldState);
    }

    const displayMessage = (key: string) => {
        setToken(`Here is your key : ${key}.\nPlease make sure to keep it safe and secret.`);
    }

    const performLogin = async () => {
        setError("");
        setToken("");

        if(!email || !password)
            return setError("Please fill all fields.");

        setSpin(true);
        const response = await partnerLogin(email, password);
        setSpin(false);

        if(!response.isSuccessful)
            return setError(response.tokenOrError);
        
        return displayMessage(response.tokenOrError);
    }

    const performRegister = async () => {
        setError("");
        setToken("");

        if(!email || !password || !organization || !phone)
            return setError("Please fill all fields.");

        setSpin(true);
        const response = await partnerRegister(email, organization, phone, password);
        setSpin(false);
        
        if(!response.isSuccessful)
            return setError(response.tokenOrError);
        
        return displayMessage(response.tokenOrError);
    }

    let form = login ? 
                <Login onChangeEmail={setEmail} onChangePassword={setPassword} onSubmit={performLogin} /> 
                : 
                <Register onChangeEmail={setEmail} onChangeOrganization={setOrganization} onChangePhoneNumber={setPhone} onChangePassword={setPassword} onSubmit={performRegister} />;

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
                                <View style={{...styles.sep, display: spin ? "flex" : "none"}}>
                                    <ActivityIndicator animating={true} color="#fff" size="small" />
                                </View>
                                <Text style={styles.error}>{error}</Text>
                                <Text style={styles.key}>{token}</Text>
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