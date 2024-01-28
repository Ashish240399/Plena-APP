import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect } from "react";
import { router } from "expo-router";
import { getAllProducts } from "@/services/getAllProducts";
import { ProductContext } from "@/context/ProductList/ProductContext";
import {
  BLACK_1,
  BLACK_10,
  BLACK_20,
  BLACK_45,
  PRIMARY_BLUE,
  PRIMARY_YELLOW,
} from "@/constants/Colors";
import { Entypo, Ionicons } from "@expo/vector-icons";
import SearchBar from "@/components/SearchBar";
import BannerCard from "@/components/BannerCard";
import ProductCard from "@/components/ProductCard";
import { CartContext } from "@/context/CartList/CartContext";

const Home = () => {
  useEffect(() => {
    getProductListArrFn();
  }, []);
  const { productList, getProductList } = useContext(ProductContext);
  const { totalItemToTheCart } = useContext(CartContext);

  async function getProductListArrFn() {
    try {
      const data = await getAllProducts();
      getProductList(data.products);
    } catch (error) {}
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hey, Ashish</Text>
          <Pressable
            onPress={() => {
              router.push("/Cart");
            }}
          >
            <Ionicons name="bag-outline" size={24} color={BLACK_1} />
            {totalItemToTheCart !== 0 && (
              <View style={styles.cartIconStyle}>
                <Text style={styles.cartIconText}>{totalItemToTheCart}</Text>
              </View>
            )}
          </Pressable>
        </View>
        <View style={styles.searchContainer}>
          <SearchBar />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.deliveryContainer}>
            <View>
              <Text style={styles.deliveryText}>DELIVERY TO</Text>
            </View>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>Green Way 3000, Sylhet</Text>
              <Entypo name="chevron-small-down" size={20} color={BLACK_10} />
            </View>
          </View>
          <View style={styles.withinContainer}>
            <View>
              <Text style={styles.withinText}>WITHIN</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>1 Hour</Text>
              <Entypo name="chevron-small-down" size={20} color={BLACK_10} />
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <ScrollView
          style={styles.bannerScrollView}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bannerContentContainer}
        >
          <BannerCard
            color={PRIMARY_YELLOW}
            offPercentage={50}
            orderCount={3}
          />
          <BannerCard color={BLACK_20} offPercentage={30} orderCount={1} />
        </ScrollView>
        <Text style={styles.recommendedText}>Recommended</Text>
        <View style={styles.productListContainer}>
          {productList.map((item: any, index: number) => (
            <View key={index} style={styles.productCardContainer}>
              <ProductCard item={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    backgroundColor: "white",
  },
  topContainer: {
    height: "35%",
    backgroundColor: PRIMARY_BLUE,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 52,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: BLACK_1,
    fontSize: 22,
    fontWeight: "600",
  },
  cartIconStyle: {
    height: 22,
    width: 22,
    borderRadius: 100,
    backgroundColor: PRIMARY_YELLOW,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
    position: "absolute",
    top: -6,
    right: -6,
  },
  cartIconText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  searchContainer: {
    marginTop: 30,
    height: 56,
  },
  deliveryContainer: {
    marginTop: 30,
  },
  deliveryText: {
    color: BLACK_45,
    fontSize: 11,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  locationText: {
    color: BLACK_10,
    fontSize: 14,
  },
  withinContainer: {
    marginTop: 30,
  },
  withinText: {
    color: BLACK_45,
    fontSize: 11,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  timeText: {
    color: BLACK_10,
    fontSize: 14,
  },
  scrollView: {
    height: "60%",
  },
  bannerScrollView: {
    paddingTop: 20,
    height: "68%",
  },
  bannerContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingLeft: 20,
  },
  recommendedText: {
    fontSize: 30,
    paddingLeft: 20,
    marginTop: 20,
  },
  productListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  productCardContainer: {
    width: "48%",
    marginTop: 10,
  },
});
