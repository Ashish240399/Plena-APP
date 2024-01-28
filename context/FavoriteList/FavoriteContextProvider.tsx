import React, { useState } from "react";
import { FavoriteContext } from "./FavoriteContext";

export const FavoriteContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favList, setFavList] = useState<number[]>([]);

  const addToFav = (id: number) => {
    setFavList([...favList, id]);
  };

  const removeFromFav = (id: number) => {
    setFavList(favList.filter((f) => f !== id));
  };
  return (
    <FavoriteContext.Provider value={{ favList, addToFav, removeFromFav }}>
      {children}
    </FavoriteContext.Provider>
  );
};
