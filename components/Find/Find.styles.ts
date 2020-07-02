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
    box: {
        backgroundColor: "rgba(5, 5, 5, 0.7)",
        width: "90%",
        padding: 20
    },
    title: {
        fontSize: 17,
        color: "white",
        fontFamily: "RobotoMono_700Bold",
        textAlign: "center"
    },
    inputcontainer: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    subcontainer: {
        marginBottom: 40
    }
});

export default styles;