import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: "20%",
        minHeight: 110,
        justifyContent: "center",
        flexDirection: "row"
    },
    subcontainerleft: {
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 0,
        zIndex: 99,
        height: "100%"
    },
    subcontainerright: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backlogo: {
        fontSize: 90,
        color: "white",
        marginBottom: 10
    }
});

export default styles;