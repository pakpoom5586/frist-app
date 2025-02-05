import React,{useEffect} from "react";
import { View,Text,StyleSheet } from "react-native";

const EmptyArrayExample: React.FC = () => {
    useEffect(() => {
        console.log("Component mounted");
}, []);
    return (
        <View style={styles.container}>
            <Text style =  {styles.text}>Check console for mount message</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
    },
});
export default EmptyArrayExample;