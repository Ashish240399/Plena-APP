import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Favorites = () => {
  return (
    <View
      style={{
        paddingTop: 56,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Can be developed
      </Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});