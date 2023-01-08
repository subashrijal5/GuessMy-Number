import { useState } from "react";
import {
  Alert,
  useWindowDimensions,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/color";

export default function StartGameScreen({ onConfirmNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();
  function handleNumberInput(inputText) {
    setEnteredNumber(inputText);
  }

  function confirmInputHandler() {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Inavlid Number",
        "Number hs to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetHandler }]
      );
      return;
    }
    onConfirmNumber(choosenNumber);
  }

  function resetHandler() {
    setEnteredNumber("");
  }
  const marginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView behavior="position">
      <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
        <Title>Guess My Number</Title>
        <Card>
          <InstructionText>Enter a Number</InstructionText>
          <TextInput
            style={styles.textInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={handleNumberInput}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  },  
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 70,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
