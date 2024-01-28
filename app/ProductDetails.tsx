import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ProductImgCarousel from "@/components/ProductImgCarousel";
import { router, useLocalSearchParams } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  BLACK_1,
  BLACK_100,
  PRIMARY_BLUE,
  PRIMARY_YELLOW,
} from "@/constants/Colors";
import { CartContext } from "@/context/CartList/CartContext";
import { FavoriteContext } from "@/context/FavoriteList/FavoriteContext";
import { Rating } from "react-native-ratings";
import Button from "@/components/Button";
import BackButton from "@/components/BackButton";
import CartAddRemoveButton from "@/components/CartAddRemoveButton";

interface ProductData {
  brand: string;
  category: string;
  description: string;
  discountPercentage: string;
  id: string;
  images: string;
  price: string;
  rating: string;
  stock: string;
  thumbnail: string;
  title: string;
}

const isProductData = (params: any): params is ProductData => {
  return (
    typeof params === "object" &&
    "brand" in params &&
    "category" in params &&
    "description" in params &&
    "discountPercentage" in params &&
    "id" in params &&
    "images" in params &&
    "price" in params &&
    "rating" in params &&
    "stock" in params &&
    "thumbnail" in params &&
    "title" in params
  );
};

const ProductDetails: React.FC = () => {
  const item = useLocalSearchParams();
  const { cart, addToCart, removeFromCart, totalItemToTheCart } =
    useContext(CartContext);
  const { favList, addToFav, removeFromFav } = useContext(FavoriteContext);

  function AddToCartButtonClicked() {
    addToCart(item);
  }

  function RemoveFromCart() {
    removeFromCart(item);
  }

  function ByNowButtonClicked() {}

  if (!isProductData(item)) {
    // Handle the case when params is not of type ProductData
    return (
      <View>
        <Text>Error loading product details</Text>
      </View>
    );
  }

  const imageArr: string[] = item.images.split(",");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.pressable} onPress={() => router.back()}>
          <BackButton />
        </Pressable>
        <Pressable
          onPress={() => {
            router.push("/Cart");
          }}
        >
          <View>
            <Ionicons name="bag-outline" size={24} color={BLACK_100} />
            {totalItemToTheCart != 0 && (
              <View style={styles.cartCount}>
                <Text style={styles.cartCountText}>{totalItemToTheCart}</Text>
              </View>
            )}
          </View>
        </Pressable>
      </View>
      <ScrollView
        style={{
          flex: 1,
          paddingTop: 20,
        }}
      >
        <View style={styles.productInfo}>
          <Text style={styles.productBrand}>{item.brand}</Text>
          <Text style={styles.productTitle}>{item.title}</Text>
          <View style={styles.ratingContainer}>
            <Rating imageSize={16} readonly startingValue={+item.rating} />
          </View>
        </View>

        <View style={styles.carouselContainer}>
          <ProductImgCarousel images={imageArr} />
          <Pressable
            onPress={() => {
              if (favList.includes(item.id)) {
                removeFromFav(item.id);
              } else {
                addToFav(item.id);
              }
            }}
            style={styles.favIconContainer}
          >
            <MaterialIcons
              name="favorite"
              size={30}
              color={favList.includes(item.id) ? "#FF8181" : "gray"}
            />
          </Pressable>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${item.price}</Text>
          <Text style={styles.discountText}>
            {item.discountPercentage}% OFF
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            {cart[item.id] ? (
              <CartAddRemoveButton
                addFn={AddToCartButtonClicked}
                removeFn={RemoveFromCart}
                value={cart[item.id]}
              />
            ) : (
              <Button
                title={"Add To Cart"}
                setFunction={AddToCartButtonClicked}
                bgColor={"white"}
                textColor={PRIMARY_BLUE}
              />
            )}
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title={"By Now"}
              setFunction={ByNowButtonClicked}
              bgColor={PRIMARY_BLUE}
              textColor={"white"}
            />
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Details</Text>
          <Text style={styles.detailsText}>{item.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 52,
  },
  pressable: {
    backgroundColor: BLACK_1,
    height: 30,
    width: 30,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    marginTop: 7,
  },
  cartCount: {
    height: 22,
    width: 22,
    borderRadius: 100,
    backgroundColor: PRIMARY_YELLOW,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
    position: "absolute",
    top: -6,
    right: -6,
  },
  cartCountText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  productInfo: {
    paddingHorizontal: 20,
  },
  productBrand: {
    fontSize: 50,
    color: "#1E222B",
    lineHeight: 62.5,
  },
  productTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#1E222B",
  },
  ratingContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  carouselContainer: {
    marginTop: 20,
  },
  favIconContainer: {
    position: "absolute",
    right: 15,
    top: 5,
    zIndex: 5,
    padding: 10,
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: PRIMARY_BLUE,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  discountText: {
    backgroundColor: PRIMARY_BLUE,
    borderRadius: 20,
    fontSize: 12,
    color: "#FAFBFD",
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 20,
  },
  buttonWrapper: {
    width: "45%",
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  detailsTitle: {
    color: "#1E222B",
    fontSize: 16,
    lineHeight: 24,
  },
  detailsText: {
    color: "#8891A5",
    lineHeight: 24,
    fontSize: 16,
    // fontWeight: 400,
  },
});
