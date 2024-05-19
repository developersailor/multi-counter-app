import { View, Text } from "react-native";
import React from "react";
import Decrease from "@/components/Decrease";
import { Colors } from "@/constants/Colors";
const Multicounter = () => {
  return (
    <View>
      <Decrease
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
        buttonColor={Colors.light.onPrimary}
        iconColor={Colors.light.primary}
      />
    </View>
  );
};

export default Multicounter;
