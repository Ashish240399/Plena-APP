import { PRIMARY_YELLOW } from "@/constants/Colors";
import React, { useState } from "react";
import { Image, Dimensions, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

interface ProductImgCarouselProps {
  images: string[];
}

const ProductImgCarousel: React.FC<ProductImgCarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const { width: viewportWidth } = Dimensions.get("window");

  const handleIndexChange = (newIndex: number) => {
    setIndex(newIndex);
  };

  return (
    <View>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        index={0}
        data={images}
        onChangeIndex={({ index }) => handleIndexChange(index)}
        renderItem={({ item }) => (
          <View style={{ width: viewportWidth, height: 207 }}>
            <Image
              source={{ uri: item }}
              style={{ width: "100%", height: 207 }}
              resizeMode="cover"
            />
          </View>
        )}
        renderAll={true}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          position: "absolute",
          top: 177,
          left: 20,
        }}
      >
        {images.map((_, i) => (
          <View
            key={i}
            style={{
              width: 15,
              height: 3,
              borderRadius: 20,
              backgroundColor: i === index ? PRIMARY_YELLOW : "#e4e4e4",
              marginRight: 3,
            }}
          ></View>
        ))}
      </View>
    </View>
  );
};

export default ProductImgCarousel;
