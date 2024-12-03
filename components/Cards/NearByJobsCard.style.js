import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES,SPACING } from "../../constants";
const nearByJobsCard = StyleSheet.create({
    nearByJobsWrapper: {
        flexDirection: "row",
        borderRadius:SPACING.medium,
        borderBottomWidth:1,
        borderBottomColor:COLORS.grey1,
        padding:SPACING.small,
        alignItems:"center",
        width:"100%"
    },
    logoWrapper: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
        marginRight: SPACING.medium
    },
    companyLogo: {
        width: "100%"
    },
    jobDetailsBlock: {
        flex:1
    },

    jobTitle: {
        fontWeight: FONT.bold,
        fontSize: SIZES.large,
    },

    companyName: {
        fontSize: SIZES.medium,
        marginVertical:SPACING.xSmall
    },

    location: {
        fontSize: SIZES.small,
        color: COLORS.grey1
    },

})
export default nearByJobsCard;