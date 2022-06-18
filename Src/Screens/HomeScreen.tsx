import React, { useEffect } from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { BiometryAuth } from "../Components/BiometryAuth/BiometryAuth";
import { AuthMethods } from "../Constants/Enums";

interface Props {}

export const HomeScreen: React.FC<Props> = ({}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <BiometryAuth method={AuthMethods.InvisibleComponent} />
    </View>
  );
};
