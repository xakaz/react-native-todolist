import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    
    elevation: 18,
  },
});
