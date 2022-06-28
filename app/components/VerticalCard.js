import { StyleSheet } from "react-native";
import React from "react";
import FlatCard from "./FlatCard";
import ViewMore from "./ViewMore";

const VerticalCard = ({ item }) => {
  if (item.type === "viewMore") {
    return <ViewMore />;
  }

  return <FlatCard item={item} />;
};

export default VerticalCard;

const styles = StyleSheet.create({});
