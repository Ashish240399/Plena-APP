import {
  BLACK_1,
  BLACK_100,
  BLACK_20,
  BLACK_60,
  PRIMARY_BLUE,
} from "@/constants/Colors";
import { CartContext } from "@/context/CartList/CartContext";
import { FavoriteContext } from "@/context/FavoriteList/FavoriteContext";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  item: any;
};

function ProductCard({ item }: Props) {
  const { favList, addToFav, removeFromFav } = useContext(FavoriteContext);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <View
      style={{
        width: "100%",
        borderRadius: 16,
        overflow: "hidden",
        paddingBottom: 17,
        backgroundColor: BLACK_1,
      }}
    >
      <Pressable
        onPress={() => {
          if (favList.includes(item.id)) {
            removeFromFav(item.id);
          } else {
            addToFav(item.id);
          }
        }}
        style={styles.favIconStyle}
      >
        <MaterialIcons
          name="favorite"
          size={20}
          color={favList.includes(item.id) ? "#FF8181" : "gray"}
        />
      </Pressable>

      <Pressable
        onPress={() => {
          router.push({ pathname: "/ProductDetails", params: item });
        }}
      >
        <Image
          source={{ uri: item.thumbnail }}
          style={{ height: 100, width: "100%" }}
        />
      </Pressable>

      <View>
        <Text style={styles.priceText}>${item.price}</Text>
        <Text style={styles.titleText}>{item.title}</Text>
        <View
          style={[
            cart[item.id] && styles.paddingToTheCartValueBtn,
            styles.cartButtonContainer,
          ]}
        >
          {cart[item.id] && (
            <Pressable
              style={styles.cartButton}
              onPress={() => {
                removeFromCart(item);
              }}
            >
              <AntDesign name="minus" size={15} color={BLACK_20} />
            </Pressable>
          )}
          {cart[item.id] && (
            <Text style={styles.cartItemCount}>{cart[item.id]}</Text>
          )}
          <Pressable
            style={styles.cartButton}
            onPress={() => {
              addToCart(item);
            }}
          >
            <AntDesign name="plus" size={15} color={BLACK_20} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    height: 194,
    backgroundColor: BLACK_1,
    borderRadius: 12,
  },
  favIconStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 40,
    width: 40,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnailView: {
    height: 120,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: "hidden",
  },
  priceText: {
    marginLeft: 10,
    marginTop: 10,
    color: BLACK_100,
    fontWeight: "700",
  },
  titleText: {
    marginLeft: 10,
    marginTop: 7,
    fontSize: 11,
    color: BLACK_60,
  },
  paddingToTheCartValueBtn: {
    // paddingHorizontal: 10,
  },
  flexOne: {
    flex: 1,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  favButton: {
    position: "absolute",
    left: 5,
    top: 5,
    zIndex: 5,
    padding: 10,
  },
  padding: {
    padding: 10,
  },
  cartButtonContainer: {
    position: "absolute",
    right: 10,
    top: 10,
    minWidth: 24,
    height: 30,
    backgroundColor: PRIMARY_BLUE,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  cartButton: {
    color: "#FF8181",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
  },
  cartItemCount: {
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    marginHorizontal: 5,
    borderRightColor: BLACK_20,
    borderLeftColor: BLACK_20,
    color: BLACK_20,
  },
});
