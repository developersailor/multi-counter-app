import React from "react";
import { Button, Text, View } from "react-native";
import Increase from "./Increase"; // Assuming Increase connects to the MobX store
import Decrease from "./Decrease"; // Assuming Decrease connects to the MobX store
import { Colors } from "@/constants/Colors";
import { observer } from "mobx-react-lite";
import { useStores } from "@/models/helpers/useStores";

const Counter = observer(() => {
  const { counterAppStore } = useStores(); // Assuming useStores returns counterAppStore
  const addCounter = () => {
    counterAppStore.addCounter(); // Use counterAppStore's action
  };
  const removeCounter = () => {
    counterAppStore.removeCounter();
  };

  return (
    <View>
      {counterAppStore.counters.map((counter, index) => (
        <View
          key={index}
          style={{ flexDirection: "row", justifyContent: "space-around" }}
        >
          <Increase
            onPress={counter.increaseCounter} // Use counter's specific action
            buttonColor={Colors.light.onPrimary}
            iconColor={Colors.light.primary}
          />
          <Text style={{ fontSize: 74, color: Colors.light.onPrimary }}>
            {counter.readCounter}
          </Text>
          <Decrease
            onPress={counter.decreaseCounter} // Use counter's specific action
            buttonColor={Colors.light.onPrimary}
            iconColor={Colors.light.primary}
          />
        </View>
      ))}
      <Button
        color={Colors.light.onPrimary}
        title="+ Sayaç Ekle"
        onPress={addCounter} // Add counter to counterAppStore
      />
      <Button
        color={Colors.light.onPrimary}
        title="- Sayaç Azalt"
        onPress={removeCounter} // Add counter to counterAppStore
      />
    </View>
  );
});

export default Counter;
