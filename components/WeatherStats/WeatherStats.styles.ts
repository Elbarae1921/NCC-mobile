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
        alignItems: "center"
    },
    box: {
        flexGrow: 1,
        width: "90%",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "rgba(5, 5, 5, 0.7)",
        padding: 20
    },
    title: {
        color: "white",
        fontSize: 18,
        fontFamily: "Sen_700Bold",
        textDecorationColor: "white",
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        marginBottom: 10,
        marginTop: 10
    },
    cardcontainer: {
        borderRadius: 20,
        backgroundColor: "rgba(134,185,224,.2)",
        width: 100,
        height: 200,
        alignItems: "center",
        paddingTop: 10,
        justifyContent: "space-evenly",
        margin: 10
    },
    cardimg: {
        width: "50%",
        height: "20%"
    },
    cardsep: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 5
    },
    temp: {
        color: "white",
        fontSize: 27,
        textAlign: "center",
        fontFamily: "Sen_700Bold"
    },
    city: {
        color: "white",
        fontSize: 20,
        textAlign:"center"
    },
    date: {
        fontFamily: "RobotoMono_400Regular",
        fontSize: 10,
        textAlign:"center",
        color: "hsla(0,0%,98%,.4)"
    }
});

export default styles;