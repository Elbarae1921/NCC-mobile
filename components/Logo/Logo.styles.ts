import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: "white",
        height: "80%",
        width: "60%",
        marginLeft: 50
    },
    abbrcontainer: {
        flex: 1,
        alignItems: "center"
    },
    border: {
        flex: 0,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: "white",
        borderStyle: "dashed",
        width: "90%"
    },
    text: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titlecontainer: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center"
    },
    abbr: {
        color: "white",
        fontSize: 40,
        fontFamily: "serif"
    },
    title: {
        color: "white",
        fontSize: 12,
        fontFamily: "RobotoMono_400Regular",
        textAlign: "center"
    }
});

export default styles;