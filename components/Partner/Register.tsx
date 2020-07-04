import React from 'react';
import { View, GestureResponderEvent } from 'react-native';

import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './Partner.styles';

interface RegisterProps {
    onChangeEmail: (text: string) => void;
    onChangeOrganization: (text: string) => void;
    onChangePhoneNumber: (text: string) => void;
    onChangePassword: (text: string) => void;
    onSubmit: (event: GestureResponderEvent) => void;
}

const Register: React.FC<RegisterProps> = ({ onChangeEmail, onChangeOrganization, onChangePhoneNumber, onChangePassword, onSubmit}) => {
    return (
        <View style={styles.formbox}>
            <View style={styles.forminputcontainer}>
                <Input placeholder="email..." textContentType="emailAddress" onChangeText={onChangeEmail} />
            </View>
            <View style={styles.forminputcontainer}>
                <Input placeholder="Organization..." textContentType="organizationName" onChangeText={onChangeOrganization} />
            </View>
            <View style={styles.forminputcontainer}>
                <Input placeholder="Phone number..." textContentType="telephoneNumber" onChangeText={onChangePhoneNumber} />
            </View>
            <View style={styles.forminputcontainer}>
                <Input placeholder="password..." textContentType="password" onChangeText={onChangePassword} secureTextEntry={true} />
            </View>
            <View style={styles.forminputcontainer}>
                <Button text="Register" onPress={onSubmit} />
            </View>
        </View>
    )
}

export default Register;