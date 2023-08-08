import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 13,
    height: 115,
    paddingHorizontal: 20,
    marginHorizontal : 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  title: {
    fontSize: 25,
  },
  img: {
    height: 25,
    width: 25,
  },
});
