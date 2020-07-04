import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    width?: number | string;
}

const Input: React.FC<InputProps> = ({ placeholder, onChangeText, textContentType, width="100%", secureTextEntry }) => {
    return (
        <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder} textContentType={textContentType} onChangeText={onChangeText} style={{...styles.input, width}} />
    )
}

const styles = StyleSheet.create({
    input: {
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: "white",
        padding: 5,
        minWidth: 170
    }
});

export default Input
