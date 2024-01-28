import CartContextProvider from "@/context/CartList/CartContextProvider";
import { FavoriteContextProvider } from "@/context/FavoriteList/FavoriteContextProvider";
import { ProductContextProvider } from "@/context/ProductList/ProductContextProvider";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <FavoriteContextProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="(tabs)" />
          </Stack>
        </FavoriteContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default StackLayout;
