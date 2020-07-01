import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    img: {
        flex: 1,
        resizeMode: "center",
        width: "100%",
        height: "100%"

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
        alignItems: "center",
        padding: 15
    },
    title: {
        fontSize: 17,
        color: "white",
        fontFamily: "RobotoMono_700Bold",
        textAlign: "center"
    },
    inputcontainer: {
        marginTop: 10,
        marginBottom: 10
    }
});

export default styles;