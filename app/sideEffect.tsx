import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const FetchDataApp: React.FC = () => {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState <boolean> (true);

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => {
            setData(json.title);
            setLoading(false);
    });
    }, []);
    return ( 
    <View style={styles.container}>
        {loading ?(<ActivityIndicator size="large" color="#0000ff" />
        ) : (
        <Text style = {styles.text}>{data}</Text>
        )}
    </View>) 
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        padding: 16,
    },
});
export default FetchDataApp;