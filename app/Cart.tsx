import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { router } from "expo-router";
import { CartContext } from "@/context/CartList/CartContext";
import { ProductContext } from "@/context/ProductList/ProductContext";
import ProductCart from "@/components/ProductCart";
import { BLACK_1, BLACK_60, PRIMARY_BLUE } from "@/constants/Colors";

const Cart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    totalItemToTheCart,
    totalCartCost,
    removeAllCartItem,
  } = useContext(CartContext);
  const { productList } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let cartItemArr: any = [];
    if (Object.keys(cart).length > 0) {
      for (let keys in cart) {
        cartItemArr.push(productList[+keys - 1]);
      }
      setCartItems(cartItemArr);
    } else {
      setCartItems([]);
    }
  }, [cart, totalItemToTheCart]);
  function checkout() {
    alert("Checkout Successful");
    removeAllCartItem();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.pressable} onPress={() => router.back()}>
          <BackButton />
        </Pressable>
        <Text style={styles.cartText}>
          Shopping Cart {"(" + totalItemToTheCart + ")"}
        </Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView}>
          {cartItems.map((el: any, id: number) => (
            <View key={id}>
              <ProductCart
                item={el}
                addFn={addToCart}
                removeFn={removeFromCart}
                itemCount={cart[el.id]}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      {totalItemToTheCart != 0 ? (
        <View style={styles.checkoutContainer}>
          <View style={styles.checkoutRow}>
            <Text style={styles.checkoutText}>Subtotal</Text>
            <Text>${totalCartCost}</Text>
          </View>
          <View style={styles.checkoutRow}>
            <Text style={styles.checkoutText}>Delivery</Text>
            <Text>$2</Text>
          </View>
          <View style={styles.checkoutTotal}>
            <Text style={styles.checkoutText}>Total</Text>
            <Text>${totalCartCost + 2}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={"Proceed To Checkout"}
              setFunction={checkout}
              bgColor={PRIMARY_BLUE}
              textColor={"white"}
            />
          </View>
        </View>
      ) : (
        <Pressable
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
          }}
          onPress={() => {
            router.push("/");
          }}
        >
          <Text style={styles.homeButton}>Go To Home</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 52,
    paddingHorizontal: 20,
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
  cartText: {
    marginLeft: 30,
    fontSize: 16,
  },
  scrollViewContainer: {
    height: "60%",
  },
  scrollView: {
    height: "100%",
  },
  checkoutContainer: {
    padding: 20,
    position: "absolute",
    bottom: 10,
    width: "95%",
    backgroundColor: BLACK_1,
    marginLeft: "2.5%",
    borderRadius: 20,
  },
  checkoutRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  checkoutTotal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  checkoutText: {
    color: BLACK_60,
  },
  buttonContainer: {
    width: "100%",
  },
  homeButton: {
    marginLeft: "30%",
    backgroundColor: PRIMARY_BLUE,
    width: 150,
    color: "white",
    padding: 10,
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
