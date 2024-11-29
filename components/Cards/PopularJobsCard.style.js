import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES, SPACING, SHADOWS } from "../../constants";

const jobsCardStyle = StyleSheet.create({
    popularJobsCardSection: {
        width: 250,
        marginTop: SPACING.large,
        padding: SPACING.large,
        borderColor: "#fff",
        borderWidth: 0.2,
        shadowColor: '#3f569c',
        // shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: SPACING.small,
        elevation: 1,
        marginBottom: SPACING.large,
        borderRadius:SPACING.small,
        backgroundColor: COLORS.white,
    },
    logoContainer: {
        width: 40,
        height: 40,
        borderRadius:SPACING.small,
        backgroundColor: COLORS.white,
        padding: SPACING.xSmall,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    logoImg: {
        width: "100%",
        height:"100%",
        borderRadius:SPACING.xSmall,
        backgroundColor:COLORS.white
    },
    jobInfoWrapper: {
        marginTop: SPACING.medium
    },

    companyName: {
        fontWeight: FONT.bold,
        fontSize: SIZES.medium, 
        color:COLORS.grey1
    },

    jobTitle: {
        fontWeight: FONT.bold,
        fontSize: SIZES.semimedium,
        marginTop: SPACING.medium,
       
    },
    location:{
        marginTop:SPACING.small,
        fontWeight: FONT.bold,
        fontSize: SIZES.medium, 
        color:COLORS.grey1
    }

});

export default jobsCardStyle;