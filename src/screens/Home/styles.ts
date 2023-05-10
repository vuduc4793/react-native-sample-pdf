import { StyleSheet } from "react-native"

import Colors from "/configs/Colors"
import { fontSizer, getScreenHeight, getScreenWidth, responsiveH, responsiveW } from "/utils/dimension"

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
  sourceInputField: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "white",
    color: "#000",
    marginBottom: 20
  },
})
