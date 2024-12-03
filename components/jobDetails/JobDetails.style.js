import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../constants";

const jobDetailsStyle = StyleSheet.create({
    wrapper: {
        justifyContent: "space-between",
        // alignItems: "center",
        paddingHorizontal: SPACING.medium
    },
    tabButton: (name, activeTab) => ({
        backgroundColor: name == activeTab ? COLORS.primary : COLORS.grey,
        padding: SPACING.medium,
        borderRadius: SPACING.small,
    }),
    name: (name, activeTab) => ( {
        color: name == activeTab ? COLORS.white : COLORS.black,
    })
})
export default jobDetailsStyle;