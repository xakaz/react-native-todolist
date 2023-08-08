import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  button: {
    position: "absolute",
    justifyContent:"center",
    alignItems:"center",
    top: 80,
    right: 10,
    backgroundColor: "#C2DAFF",
    width:70,
    height:70,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  txt: {
    color: "#2F76E5",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 50,
  },
});
