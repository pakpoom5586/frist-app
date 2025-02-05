import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

type CartCounterProps = {
  initialCount?: number;
};

const CartCounter: React.FC<CartCounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState<number>(initialCount);

  const isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (count === 10) {
      Alert.alert("ถึง จํานวนสูงสุดแล้ว");
    } else if (count === 0) {
      Alert.alert("ไม่ สามารถลดได้อีก");
    }
  }, [count]);

  const increase = () => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>จำนวนสินค้า: {count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={decrease}>
          <Text style={styles.buttonText}>ลด</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={increase}>
          <Text style={styles.buttonText}>เพิ่ม</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCounter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  countText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
