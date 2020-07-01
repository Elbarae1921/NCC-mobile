import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const Input: React.FC<TextInputProps> = ({ placeholder, onChangeText, textContentType }) => {
    return (
        <TextInput placeholder={placeholder} textContentType={textContentType} onChangeText={onChangeText} style={styles.input} />
    )
}

const styles = StyleSheet.create({
    input: {
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: "white",
        padding: 5,
        width: "100%",
        minWidth: 170
    }
});

export default Input
