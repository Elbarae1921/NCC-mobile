import React from 'react';
import { TouchableHighlight, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface ButtonProps {
    text: string;
    onPress(event: GestureResponderEvent): void;
    width?: number | string;
}

const Button: React.FC<ButtonProps> = ({ text, onPress, width="100%" }) => {
    return (
        <TouchableHighlight underlayColor={"rgba(255,255,255,0.2)"} style={{...styles.btn, width}} onPress={onPress} >
            <Text style={styles.text} >{text}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderWidth: 1,
        borderColor: "white",
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
