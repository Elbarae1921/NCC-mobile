import React from 'react';
import { View } from 'react-native';

import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './Partner.styles';

const Register: React.FC = () => {
    return (
        <View style={styles.formbox}>
            <View style={styles.forminputcontainer}>
                <Input placeholder="email..." textContentType="emailAddress" onChangeText={() => {}} />
            </View>
            <View style={styles.forminputcontainer}>
                <Input placeholder="Organization..." textContentType="organizationName" onChangeText={() => {}} />
            </View>
            <View style={styles.forminputcontainer}>
                <Input placeholder="Phone number..." textContentType="telephoneNumber" onChangeText={() => {}} />
            </View>
            <View style={styles.forminputcontainer}>
                <Input placeholder="password..." textContentType="password" onChangeText={() => {}} />
            </View>
            <View style={styles.forminputcontainer}>
                <Button text="Register" onPress={() => {}} />
            </View>
        </View>
    )
}

export default Register;