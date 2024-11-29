import { StyleSheet } from "react-native";
import { SIZES, SPACING } from "../../constants";

const companyStyle = StyleSheet.create({
    companyDetailsWrapper: {
        alignItems: "center",
        justifyContent: "center",
        margin: SPACING.large
    },
    companyLogoBlock: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    companyLogo: {
        width: "100%"
    },
    companyName: {
        fontSize: SIZES.medium
    },
    jobTitle: {
        marginBottom:SPACING.small,
        fontSize: SIZES.large
    },
    CompanyNameJobWrapper: {
        margin: SPACING.large,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default companyStyle;