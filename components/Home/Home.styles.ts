import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    panel: {
        borderBottomColor: "white",
        borderBottomWidth: 2,
        height: Dimensions.get("window").height / 2,
        width: "100%"
    },
    img: {
        height: "100%"
    },
    intermediate: {
        flex: 1,
        backgroundColor: `rgba(0, 0, 0, 0.65)`,
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        borderColor: "white",
        borderWidth: 1,
        width: "60%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontFamily: "Sen_400Regular",
        fontSize: 20
    }
});

export default styles;