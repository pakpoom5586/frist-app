import React from "react";
import { Text, View, StyleSheet } from "react-native";

type Props = {
  num1: number;
  num2: number;
  operator: string; 
};

const Workshop2_1: React.FC<Props> = ({ num1, num2, operator }) => {
  let result: string | number;
  
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
        if (num2 === 0) {
            result = `${num1} / ${num2} = Error (Divide by 0)`; 
          } else {
            result = `${num1} / ${num2} = ${num1 / num2}`; 
          }
      break;
    default:
      result = "Invalid operator";
      break;
  }

  return (
    <View style={styles.container}>
       <Text style={styles.text}>
        {typeof result === "number"
          ? `${num1} ${operator} ${num2} = ${result}`
          : result}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default Workshop2_1;
