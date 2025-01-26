import React, { Component } from "react";
import{ View,Text,Button,StyleSheet } from "react-native";

type CounterProps = {
    initialCount?:number;
}

type CounterState = {
    count:number;
}

class Counter extends Component<CounterProps,CounterState> {
    constructor(props:CounterProps){
        super(props);
        this.state = {
            count:props.initialCount || 0,
        };
    }

    increment = () => {
        this.setState((prevState) => ({count:prevState.count+1}));
    }

    decrement = () => {
        this.setState((prevState)=>({count:prevState.count-1}));
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Count: {this.state.count}</Text>
                <Button title="Increment" onPress={this.increment}/>
                <Button title="Decrement" onPress={this.decrement}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: "center",
    },
    text:{
        fontSize: 18,
        marginVertical: 8,
    },
});

export default Counter;