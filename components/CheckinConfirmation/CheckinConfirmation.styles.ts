import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    intermediate: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.65)'
    },
    boxcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 17,
        fontFamily: "RobotoMono_700Bold",
        textAlign: "center"
    },
    number: {
        color: "green"
    },
    box: {
        backgroundColor: "rgba(5, 5, 5, 0.7)",
        width: "90%",
        padding: 20,
        alignItems: "center"
    },
    dashed: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 1,
        borderStyle: "dashed",
        padding: 5,
        marginTop: 5,
        marginBottom: 5
    },
    sep: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    name: {
        color: "white",
        fontFamily: "Sen_700Bold",
        fontSize: 17
    },
    info: {
        width: "90%",
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
});

export default styles;