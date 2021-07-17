import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
    const type = props.type;
    console.warn(type);

    const backgroundColor = type === 'primary' ? 'black' : 'white';
  return (
    <View style={styles.container}>
        <Pressable
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={() => {
                console.warn('Hey there');
            }}>

            <Text style={styles.text}>Custom Order</Text>

        </Pressable>
    </View>
  );
};

export default StyledButton;