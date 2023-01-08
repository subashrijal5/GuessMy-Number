import { StyleSheet, Text } from "react-native";
import Colors from "../constants/color";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instruction: {
    fontSize: 24,
    color: Colors.secondary500,
  },
});
