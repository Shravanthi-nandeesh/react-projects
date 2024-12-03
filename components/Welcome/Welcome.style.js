import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, SPACING } from "../../constants";

const WelcomeHomeStyle = StyleSheet.create({
    container: {
        width: "100%"
    },
    userName: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
    },
    welcomeMessage: {
        fontSize: SIZES.xLarge,
        fontFamily: FONT.bold,
        paddingTop: SPACING.small,
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        flexDirection: "row",
        marginTop: SPACING.large,
        marginBottom: SPACING.large
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        // borderRadius: SIZES.xSmall,
        height: "100%"
    },
    searchInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,

    },
    searchButtonWrapper: {
        width: 50,
        height: "100%",
        justifyContent: "center",
        alignItems: "center", backgroundColor: "#eb870e"
    },
    searchBtnImage: {
        width: "50%",
        height: "50%"
    },
    jobTabs: (activeJobType, item) => (
        {
            borderColor: activeJobType == item ? COLORS.secondary : COLORS.grey,
            borderWidth: 1,
            paddingHorizontal: SPACING.medium,
            paddingVertical: SPACING.small,
            borderRadius: SIZES.large
        }
    ),
    tabButtonText: (activeJobType, item) => ({
        fontFamily: FONT.medium,
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    })
})
    ;
export default WelcomeHomeStyle;