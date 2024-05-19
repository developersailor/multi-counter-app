import { View, Text, Button } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/Ionicons";

const Decrease = (props: Props) => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: props.buttonColor,
      }}
    >
      <View>
        <FontAwesome name="remove" size={100} color={props.iconColor} />
      </View>
    </View>
  );
};
type Props = {
  onPress: () => void;
  buttonColor: string;
  iconColor: string;
};
export default Decrease;
