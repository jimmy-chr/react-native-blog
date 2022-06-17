import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import Title from "./Title";
import SmallCard from "./SmallCard";

const HorizontalList = ({ title, data }) => {
  return (
    <>
      <Title size={20}>{title}</Title>
      <View style={styles.listStyle}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => <SmallCard item={item.item} />}
        />
      </View>
    </>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 15,
  },
});
