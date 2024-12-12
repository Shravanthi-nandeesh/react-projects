import { StyleSheet } from "react-native";
import { COLORS, SIZES, SPACING } from "./constants";

const GlobalStyle = StyleSheet.create({
    Wrapper: {
        // alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: SPACING.medium,
        paddingBottom: SPACING.xLarge
    },
    textBold: {
        fontWeight: "800",
        borderRadius: SPACING.small,
        backgroundColor: COLORS.tertiary,
    },
    Heading: {
        marginBottom: SPACING.medium,
        fontFamily: "Lato-Bold",
        fontSize: SIZES.xLarge,
        flex: 1,
        marginTop: SPACING.medium,
    },
    navigationPages:{
        flexDirection:"row"
    },
    Content: {
        lineHeight: SIZES.xLarge,
        // textAlign: "justify",
        fontFamily: "Lato-Regular",
        fontSize: SIZES.intermediate,
        maxWidth: "98%",
        marginVertical: SPACING.medium,
    },
    codeBlock: {
        backgroundColor: COLORS.secondary,
        padding: SPACING.medium,
        borderRadius: SPACING.small,
    },
    outPutBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
    },
    outPut: {
        width: "100%",
        backgroundColor: COLORS.grey,
        marginTop: SPACING.medium,
        marginBottom:SPACING.medium
    },
    outPutText: {
        // Additional styling for the output text
        maxWidth: 80,
        marginBottom: SPACING.medium
    },
    realoadOutput: {
        backgroundColor: COLORS.secondary,
        color: COLORS.white,
        fontWeight: "800",
        paddingHorizontal: SPACING.small,

        paddingVertical: SPACING.xSmall,
        borderRadius: SIZES.xSmall
    },
    codeBlockText: {
        color: COLORS.white,
    },
    nextConcept: {
        marginVertical: SPACING.large,
        color: COLORS.primary,
        fontWeight: "800",
        textTransform: "capitalize",
        justifyContent:"flex-start",
        textAlign: "center",
        // backgroundColor:"#eee",
        width: "100%",
        marginRight:10

    },
    Button: {
        paddingHorizontal: SPACING.medium,
        paddingVertical: SPACING.small,
        backgroundColor: COLORS.primary,
        borderRadius: SPACING.small
    },
    buttonText: {
        color: COLORS.white
    }
})
export default GlobalStyle;