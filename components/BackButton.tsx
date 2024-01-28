import { StyleSheet, View } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { BLACK_100 } from "@/constants/Colors";

const BackButton = () => {
  return (
    <View>
      <EvilIcons
        name="chevron-left"
        size={25}
        color={BLACK_100}
        style={{ marginBottom: 5 }}
      />
    </View>
  );
};

export default BackButton;
