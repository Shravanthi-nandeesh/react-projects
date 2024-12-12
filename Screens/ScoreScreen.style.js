import { StyleSheet } from "react-native";
import { COLORS, SIZES, SPACING } from "../constants";

const ScoreScreenStyle = StyleSheet.create({
    scoreScreenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.STROKE_COLOR,
        position: "relative",
        width: "100%",
    },
    percentageText: {
        fontSize: 80,
        color: COLORS.STROKE_COLOR,
        // left:"50%"
    }
});
export default ScoreScreenStyle;