import { Text } from "react-native";
import React from "react";

const Subtitle = ({ children, numberOfLines = 2, size = 15 }) => {
  return (
    <Text numberOfLines={numberOfLines} style={{ fontsize: size }}>
      {children}
    </Text>
  );
};
export default Subtitle;
