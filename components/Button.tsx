import { PRIMARY_BLUE } from "@/constants/Colors";
import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({
  title,
  setFunction,
  bgColor,
  textColor,
}: {
  title: string;
  setFunction: Function;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <Pressable
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={() => {
        setFunction();
      }}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 20,
    height: 56,
    fontSize: 14,
    borderWidth: 1,
    borderColor: PRIMARY_BLUE,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
