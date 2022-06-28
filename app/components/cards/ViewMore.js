import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";

const ViewMore = ({ style, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.text}>View more</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ViewMore;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
    height: 50,
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7a74e0",
  },
});
