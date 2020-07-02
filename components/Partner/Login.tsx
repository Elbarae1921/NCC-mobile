import React from 'react';
import { View } from 'react-native';

import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './Partner.styles';

const Login: React.FC = () => {
    return (
        <View style={styles.formbox}>
            <View style={styles.forminputcontainer}>
                <Input placeholder="email..." textContentType="emailAddress" onChangeText={() => {}} />
            </View>
            <View style={styles.forminputcontainer}>
                <Input placeholder="password..." textContentType="password" onChangeText={() => {}} />
            </View>
            <View style={styles.forminputcontainer}>
                <Button text="Login" onPress={() => {}} />
            </View>
        </View>
    )
}

export default Login;