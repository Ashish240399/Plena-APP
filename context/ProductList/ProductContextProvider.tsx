import { useState } from "react";
import { ProductContext } from "./ProductContext";

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productList, setProductList] = useState<any[]>([]);

  function getProductList(list: any[]) {
    setProductList(list);
  }
  return (
    <ProductContext.Provider value={{ productList, getProductList }}>
      {children}
    </ProductContext.Provider>
  );
};
