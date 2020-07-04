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
        alignItems: "center",
        justifyContent: "center",
        padding: 15
    },
    box: {
        backgroundColor: "rgba(5, 5, 5, 0.7)",
        alignItems: "center",
        padding: 20
    },
    intro: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginBottom: 30
    },
    sep: {
        width: "100%",
        marginTop: 15,
        marginBottom: 15
    },
    title: {
        color: "white",
        fontSize: 17,
        fontFamily: "RobotoMono_700Bold",
        textAlign: "center"
    },
    text: {
        color: "white",
        fontFamily: "RobotoMono_400Regular",
        textAlign: "center"
    },
    post: {
        backgroundColor: "#aa1414",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    get: {
        backgroundColor: "#143296",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    mettext: {
        color: "white",
        textTransform: "uppercase",
        textAlign: "center"
    },
    url: {
        color: "white",
        fontSize: 8,
        fontFamily: "RobotoMono_400Regular"
    },
    border: {
        width: "50%",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 1,
        borderStyle: "dashed",
        height: 0
    },
    form: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        width: "100%"
    },
    forminputcontainer: {
        width: "90%",
        margin: 10
    },
    formbox: {
        backgroundColor: "rgba(0,0,0,.5)",
        width: "95%",
        alignItems: "center",
        padding: 15
    },
    error: {
        color: "red",
        textAlign: "center",
        fontSize: 10,
        fontFamily: "RobotoMono_400Regular"
    },
    key: {
        color: "green",
        textAlign: "center",
        fontSize: 11
    }
});

export default styles;