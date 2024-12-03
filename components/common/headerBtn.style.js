import { StyleSheet } from "react-native";
import { COLORS,FONT,SIZES, SPACING } from "../../constants";
const styles = StyleSheet.create({
    container:{
        width:"100%"
    },
    ButtonContainer: {
        width: 35,
        height: 35,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
        marginLeft:SPACING.medium,
        marginRight:SPACING.medium
      },
      btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
      }),
      menu:{
        transform: [{rotate: '180deg'}],
      }
})
export default styles;