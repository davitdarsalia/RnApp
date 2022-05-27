import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./Src/Navigation/RootRouter";

import { Provider } from "react-redux";
import { store } from "./Src/Store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
