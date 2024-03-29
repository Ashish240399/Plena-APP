import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<any>({});
  const [totalItemToTheCart, setTotalItemToCart] = useState(0);
  const [totalCartCost, setTotalCartCost] = useState(0);

  const addToCart = (item: any) => {
    if (cart[item.id]) {
      setCart({
        ...cart,
        [item.id]: cart[item.id] + 1,
      });
    } else {
      setCart({ ...cart, [item.id]: 1 });
    }
    setTotalItemToCart(totalItemToTheCart + 1);
    setTotalCartCost(totalCartCost + Number(item.price));
  };

  const removeFromCart = (item: any) => {
    if (cart[item.id]) {
      if (cart[item.id] === 1) {
        delete cart[item.id];
      } else {
        setCart({
          ...cart,
          [item.id]: cart[item.id] - 1,
        });
      }
    }
    setTotalItemToCart(totalItemToTheCart - 1);
    setTotalCartCost(totalCartCost - Number(item.price));
  };

  const removeAllCartItem = () => {
    setCart({});
    setTotalItemToCart(0);
    setTotalCartCost(0);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalItemToTheCart,
        totalCartCost,
        removeAllCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
