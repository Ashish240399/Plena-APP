import { BLACK_20, PRIMARY_BLUE } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CartAddRemoveButton = ({
  addFn,
  removeFn,
  value,
}: {
  addFn: Function;
  removeFn: Function;
  value: any;
}) => {
  return (
    <View style={styles.button}>
      <Pressable
        style={styles.pressableLeft}
        onPress={() => {
          removeFn();
        }}
      >
        <AntDesign name="minus" size={20} color={BLACK_20} />
      </Pressable>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
      <Pressable
        style={styles.pressableRight}
        onPress={() => {
          addFn();
        }}
      >
        <AntDesign name="plus" size={20} color={BLACK_20} style={styles.icon} />
      </Pressable>
    </View>
  );
};

export default CartAddRemoveButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 20,
    height: 56,
    fontSize: 14,
    borderWidth: 1,
    borderColor: PRIMARY_BLUE,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pressableLeft: {
    color: PRIMARY_BLUE,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: PRIMARY_BLUE,
    borderTopLeftRadius: 19,
    borderBottomLeftRadius: 19,
  },
  pressableRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: PRIMARY_BLUE,
    borderTopRightRadius: 19,
    borderBottomRightRadius: 19,
  },
  icon: {
    fontWeight: "bold",
  },
  valueContainer: {
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    height: "100%",
    borderRightColor: PRIMARY_BLUE,
    borderLeftColor: PRIMARY_BLUE,
    color: PRIMARY_BLUE,
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  valueText: {
    color: PRIMARY_BLUE,
    fontWeight: "bold",
  },
});
