import React,{useState,useEffect} from "react";
import { View,Text, StyleSheet }  from "react-native";

const DependencyArrayExample: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    
    useEffect(() => {
      console.log(`Count updated to: ${count}`);
    }, [count]);
    
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Count: {count}</Text>
        <Text style={styles.text} onPress={() => setCount(count + 1)}>Increment</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 18,
      margin: 10,
    },
  });
  export default DependencyArrayExample;