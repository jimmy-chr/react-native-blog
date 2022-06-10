import { FlatList, StyleSheet } from "react-native";
import React from "react";
import Title from "./Title";
import SmallCard from "./SmallCard";

const HorizontalList = ({ title, data }) => {
  return (
    <>
      <Title size={20}>{title}</Title>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => <SmallCard item={item} />}
      />
    </>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({});
