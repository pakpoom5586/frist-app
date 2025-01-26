import React from "react";
import { Text, View, StyleSheet } from "react-native";

type Item = {
    fruit: string;
    quantity: number;
};

type Props = {
    items: Item[];
};

const Workshop2_2: React.FC<Props> = ({ items }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Shopping Cart</Text>
            {items.map((item, index) => (
                <Text key={index} style={styles.text}>
                    {item.fruit}: {item.quantity} pcs
                </Text>
            ))}
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

export default Workshop2_2;