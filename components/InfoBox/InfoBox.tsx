import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AvailableInfo } from '../../types/PersonType';

interface InfoBoxProps {
    data: AvailableInfo;
    width?: number | string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ data, width="100%" }) => {
    return (
        <View style={{...styles.info, width}}>
            <View style={styles.infosep}>
                <Text style={styles.lef}>First Name : </Text>
                <Text style={styles.rig}>{data.firstName}</Text>
            </View>
            <View style={styles.infosep}>
                <Text style={styles.lef}>Last Name : </Text>
                <Text style={styles.rig}>{data.familyName}</Text>
            </View>
            <View style={styles.infosep}>
                <Text style={styles.lef}>City (provided by the user) : </Text>
                <Text style={styles.rig}>{data.city}</Text>
            </View>
            <View style={styles.infosep}>
                <Text style={styles.lef}>Status : </Text>
                <Text style={styles.rig}>{data.status}</Text>
            </View>
            <View style={styles.infosep}>
                <Text style={styles.lef}>Organization : </Text>
                <Text style={styles.rig}>{data.org}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,.7)"
    },
    infosep: {
        flexDirection: "row",
        marginTop: 3,
        marginBottom: 3
    },
    lef: {
        fontFamily: "Sen_400Regular",
        color: "white"
    },
    rig: {
        fontFamily: "Sen_400Regular",
        color: "#274197"
    }
})

export default InfoBox;