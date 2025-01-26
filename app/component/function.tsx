import React from "react";
import { View,Text } from "react-native";

type BasicFunctionProps ={
    name:string;
};

const BasicFunction:React.FC<BasicFunctionProps> = ({name}) => {
    return (
        <View>
            <Text>Hello,{name}</Text>
        </View>
    );
} 

export default BasicFunction;