import React from 'react';
import { View, Text, GestureResponderEvent } from 'react-native';

import Logo from '../Logo/Logo';

import styles from './Header.styles';

interface HeaderProps {
    goBack(event: GestureResponderEvent): void;
}

const Header: React.FC<HeaderProps> = ({ goBack }) => {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainerleft}>
                <Text style={styles.backlogo} onPress={goBack}>
                    {"<"}
                </Text>
            </View>
            <View style={styles.subcontainerright}>
                <Logo />
            </View>
        </View>
    )
}

export default Header;
