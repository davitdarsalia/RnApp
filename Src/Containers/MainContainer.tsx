import React from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { ContainerStyles } from "./style";

interface Props {}

export const MainContainer: React.FC<Props> = ({}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "red",
      }}
    ></SafeAreaView>
  );
};
