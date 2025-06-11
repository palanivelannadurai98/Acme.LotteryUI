import { StyleSheet } from "react-native";

export const PrimaryBtnStyle = StyleSheet.create({
    button: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 50,
        width: '100%',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    disabledButton: {
        backgroundColor: 'lightgray',
        opacity: 0.7,
    },
    disabledButtonText: {
        color: '#000000',
        fontWeight: 'bold',
        opacity: 1
    },
});
