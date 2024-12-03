import { StyleSheet } from "react-native";

import { SIZES, SPACING } from "../../../constants";
const AboutcompanyStyle = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: SPACING.small
    },

    title: {
        fontSize: SIZES.large,
        marginVertical: SPACING.large
    },

    description: {
        lineHeight: SPACING.large,
        textAlign: "justify"
    },

})
export default AboutcompanyStyle;