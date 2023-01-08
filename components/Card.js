import { StyleSheet, View } from "react-native";
import Colors from "../constants/color";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // shadow for android
    elevation: 8,
    // shadow for ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
