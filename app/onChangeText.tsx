import React,{useState} from "react";
import { View,TextInput,Text,StyleSheet } from "react-native";

const InputApp: React.FC = () => {
    const [text, setText] = useState<string>('');
    return (
        <View style = {styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Type something..."
                onChangeText={(value) => setText(value)}
                value={text}
            />
            <Text style={styles.text}>You typed: {text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        width: '80%',
        marginBottom: 16,
    },
    text:{
        fontSize: 18,
    }
});

export default InputApp;