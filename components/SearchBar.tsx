import {
  BLACK_1,
  BLACK_20,
  BLACK_45,
  SECONDARY_BLUE,
} from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

function SearchBar() {
  return (
    <View style={styles.searchBarDiv}>
      <AntDesign name="search1" size={18} color={BLACK_1} />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Search Products or Store"
        placeholderTextColor={BLACK_45}
      />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  searchBarDiv: {
    width: "100%",
    borderRadius: 28,
    backgroundColor: SECONDARY_BLUE,
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingLeft: 20,
  },
  textInputStyle: {
    backgroundColor: "transparent",
    fontSize: 14,
    height: "100%",
    width: "100%",
    color: BLACK_20,
  },
});
