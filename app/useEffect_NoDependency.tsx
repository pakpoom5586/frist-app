import React , { useState,useEffect } from 'react';
import { View, Text,StyleSheet } from 'react-native';

const NoDependencyExample: React.FC = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Component re-rendered");
    });
    return (
        <View style={styles.container}>
            <Text style = {styles.text}>Count: {count}</Text>
            <Text style = {styles.text} onPress={()=>setCount(count+1)}>Increase Count</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        margin: 10
    }
});

export default NoDependencyExample;