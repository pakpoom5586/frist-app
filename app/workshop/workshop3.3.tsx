import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

type CalculatorProps = {};

const BasicCalculator: React.FC<CalculatorProps> = () => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculation = (operator: string) => {
    const val1 = parseFloat(num1);
    const val2 = parseFloat(num2);

    if (isNaN(val1) || isNaN(val2)) {
      Alert.alert("ข้อผิดพลาด", "กรุณาใส่ตัวเลขที่ถูกต้อง");
      return;
    }

    let res: number = 0;

    switch (operator) {
      case "+":
        res = val1 + val2;
        break;
      case "-":
        res = val1 - val2;
        break;
      case "*":
        res = val1 * val2;
        break;
      case "/":
        if (val2 === 0) {
          Alert.alert("ข้อผิดพลาด", "ไม่สามารถหารด้วยศูนย์ได้");
          return;
        }
        res = val1 / val2;
        break;
      default:
        break;
    }
    setResult(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>เครื่องคิดเลขพื้นฐาน</Text>
      <TextInput
        style={styles.input}
        placeholder="ตัวเลข 1"
        value={num1}
        keyboardType="numeric"
        onChangeText={(text) => setNum1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="ตัวเลข 2"
        value={num2}
        keyboardType="numeric"
        onChangeText={(text) => setNum2(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => handleCalculation("+")} />
        <Button title="-" onPress={() => handleCalculation("-")} />
        <Button title="*" onPress={() => handleCalculation("*")} />
        <Button title="/" onPress={() => handleCalculation("/")} />
      </View>
      {result !== null && (
        <Text style={styles.resultText}>ผลลัพธ์: {result}</Text>
      )}
    </View>
  );
};

export default BasicCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5FCFF",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#007AFF",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  resultText: {
    fontSize: 20,
    textAlign: "center",
  },
});
