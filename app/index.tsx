import { View, Text } from "react-native";
import React from "react";

import { Screen } from "@/components/Screen";
import { useInitialRootStore } from "@/models/helpers/useStores";

import Counter from "@/components/Counter";
import { RootStoreModel } from "@/models/RootStore";

const App = () => {
  return (
    <Screen>
      <Counter />
    </Screen>
  );
};

export default App;
