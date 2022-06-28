import { StyleSheet } from "react-native";
import React from "react";
import BlockCard from "./cards/BlockCard";
import { useNavigation } from "@react-navigation/native";

const FeaturedNews = ({ item }) => {
  const navigation = useNavigation();
  return (
    <BlockCard
      onPress={() => navigation.navigate("NewsDetail", { item })}
      item={item}
      style={{ marginVertical: 15 }}
    />
  );
};

const styles = StyleSheet.create({});

export default FeaturedNews;
