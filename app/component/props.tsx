import React from "react";
import { View, Text, StyleSheet } from "react-native";

type UserProps = {
  name: string;
  age: number;
  hobbies: string[];
  address: {
    city: string;
    country: string;
  };
};

const UserInfo: React.FC<UserProps> = ({ name, age, hobbies, address }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Age: {age}</Text>
      <Text style={styles.text}>
        Hobbies:
        {hobbies.map((hobby, index) => (
          <Text key={index} style={styles.text}>
            - {hobby}
          </Text>
        ))}
      </Text>
      <Text style={styles.text}>
        Address: {address.city}, {address.country}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9c2ff",
    borderRadius: 8,
    margin: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
  },
 
});

export default UserInfo;
