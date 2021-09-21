import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: 'rgb(218,218,218)',
    },
    user: {
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 129,
        borderRadius: 25,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    bottom: {
        backgroundColor: 'rgb(218,218,218)',
        justifyContent: 'flex-end'
    },
    button: {
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
    }
});


