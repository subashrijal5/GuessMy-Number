import { StyleSheet, Text, Platform } from "react-native";

export default function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    borderWidth: Platform.select({ios: 0, android:2}),
    borderColor: 'white',
    padding: 12,
  },
});
