import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { BLACK_100, BLACK_45, PRIMARY_YELLOW } from "@/constants/Colors";

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: "white",
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "10%",
          elevation: 0,
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={styles.tabIcon}>
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {focused ? (
                    <View style={styles.selectedIcon}>
                      <Ionicons
                        name="home-sharp"
                        size={20}
                        color={PRIMARY_YELLOW}
                      />
                    </View>
                  ) : (
                    <View style={styles.unSelectedIcon}>
                      <Ionicons
                        name="home-outline"
                        size={20}
                        color={BLACK_100}
                      />
                      <Text
                        style={{
                          color: BLACK_45,
                          fontSize: 12,
                        }}
                      >
                        Home
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Category"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={styles.tabIcon}>
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {focused ? (
                    <View style={styles.selectedIcon}>
                      <Ionicons name="grid" size={20} color={PRIMARY_YELLOW} />
                    </View>
                  ) : (
                    <View style={styles.unSelectedIcon}>
                      <Ionicons
                        name="grid-outline"
                        size={20}
                        color={BLACK_100}
                      />
                      <Text
                        style={{
                          color: BLACK_45,
                          fontSize: 12,
                        }}
                      >
                        Category
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={styles.tabIcon}>
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {focused ? (
                    <View style={styles.selectedIcon}>
                      <MaterialIcons
                        name="favorite"
                        size={20}
                        color={PRIMARY_YELLOW}
                      />
                    </View>
                  ) : (
                    <View style={styles.unSelectedIcon}>
                      <MaterialIcons
                        name="favorite-border"
                        size={20}
                        color={BLACK_100}
                      />
                      <Text
                        style={{
                          color: BLACK_45,
                          fontSize: 12,
                        }}
                      >
                        Favorite
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="More"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={styles.tabIcon}>
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {focused ? (
                    <View style={styles.selectedIcon}>
                      <Feather
                        name="more-vertical"
                        size={20}
                        color={PRIMARY_YELLOW}
                      />
                    </View>
                  ) : (
                    <View style={styles.unSelectedIcon}>
                      <Feather
                        name="more-vertical"
                        size={20}
                        color={BLACK_100}
                      />
                      <Text
                        style={{
                          color: BLACK_45,
                          fontSize: 12,
                        }}
                      >
                        More
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
  },
  selectedIcon: {
    position: "absolute",
    left: 0,
    bottom: 24,
    height: "100%",
    width: "100%",
    borderRadius: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BLACK_100,
  },
  unSelectedIcon: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
