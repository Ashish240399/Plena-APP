import { BLACK_1, BLACK_10 } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  offPercentage: number;
  color: string;
  orderCount: number;
};

function BannerCard({ offPercentage, color, orderCount }: Props) {
  return (
    <View style={[styles.bannerCard, { backgroundColor: color }]}>
      <View>
        <Feather name="image" size={68} color={BLACK_1} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: BLACK_1,
          }}
        >
          Get
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: BLACK_1,
          }}
        >
          {offPercentage}% OFF
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: BLACK_1,
          }}
        >
          On first 0{orderCount} order
        </Text>
      </View>
    </View>
  );
}

export default BannerCard;

const styles = StyleSheet.create({
  bannerCard: {
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 40,
  },
});
