import React from 'react';
import { View, GestureResponderEvent } from 'react-native';

import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './Partner.styles';

interface LoginProps {
    onChangeEmail: (text: string) => void;
    onChangePassword: (text: string) => void;
    onSubmit: (event: GestureResponderEvent) => void;
}

const Login: React.FC<LoginProps> = ({ onChangeEmail, onChangePassword, onSubmit }) => {
    return (
        <View style={styles.formbox}>
            <View style={styles.forminputcontainer}>
                <Input placeholder="email..." textContentType="emailAddress" onChangeText={onChangeEmail} />
            </View>
            <View style={styles.forminputcontainer}>
                <Input placeholder="password..." textContentType="password" onChangeText={onChangePassword} secureTextEntry={true} />
            </View>
            <View style={styles.forminputcontainer}>
                <Button text="Login" onPress={onSubmit} />
            </View>
        </View>
    )
}

export default Login;