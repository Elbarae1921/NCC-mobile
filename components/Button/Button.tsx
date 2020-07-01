import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface ButtonProps {
    text: string;
    onPress(event: GestureResponderEvent): void;
}

const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress} >
            <Text style={styles.text} >{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderWidth: 1,
        borderColor: "white",
        width: 200,
        height: 35,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 11
    }
})

export default Button
