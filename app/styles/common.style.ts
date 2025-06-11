import { StyleSheet } from "react-native";

const commonStyle = StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    bgWhite: {
        backgroundColor: '#ffffff'
    },
    bgBlue: {
        backgroundColor: '#1E90FF'
    },
    dFlex: {
        display: 'flex'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    flexDirectionRow: {
        flexDirection: 'row'  
    },
    bottomBtnContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
});

export default commonStyle;