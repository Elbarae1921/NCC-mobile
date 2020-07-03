import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { LocationInfo } from '../../types/PersonType';

interface InfoBoxProps {
    data: LocationInfo;
    width?: number | string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ data, width="100%" }) => {
    return (
        <View style={{...styles.info, width}}>
            <View style={styles.infosep}>
                <Text style={styles.lef}>IP : </Text>
                <Text style={styles.rig}>{data.ip}</Text>
            </View>
            <View style={styles.infosep}>
                <Text style={styles.lef}>Timezone : </Text>
                <Text style={styles.rig}>{data.timezone}</Text>
            </View>
            <View style={styles.infosep}>
                <Text style={styles.lef}>Country : </Text>
                <Text style={styles.rig}>{data.country}</Text>
            </View>
            <View style={styles.infosep}>
                <Text style={styles.lef}>City : </Text>
                <Text style={styles.rig}>{data.city}</Text>
            </View>
            <View style={styles.infosep}>
                <Text style={styles.lef}>Region : </Text>
                <Text style={styles.rig}>{data.region}</Text>
            </View>
            <View style={styles.infosep}>
                <Text style={styles.lef}>Latitude : </Text>
                <Text style={styles.rig}>{data.latitude}</Text>
            </View>
            <View style={styles.infosep}>
                <Text style={styles.lef}>Longitude : </Text>
                <Text style={styles.rig}>{data.longitude}</Text>
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
        color: "rgb(170, 20, 20)"
    }
})

export default InfoBox;