import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONT, SPACING } from "../../constants";


const footerStyles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: SIZES.small,
        backgroundColor: "#FFF",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height:100
    },
    applyBtn: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        padding:SPACING.medium,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.small,
    },
    saveButton:{
        width: 100,
        height: 50,
        marginRight:SPACING.medium,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
    },
    saveBtnText:{
        fontSize:SIZES.medium
    },

    applyBtnText: {
        fontSize: SIZES.medium,
        color: COLORS.white,
        fontFamily: FONT.bold,
    },
});

export default footerStyles;