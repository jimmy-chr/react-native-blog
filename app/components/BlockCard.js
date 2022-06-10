import { View, StyleSheet, Image } from "react-native";
import Title from "./Title";
import Subtitle from "./Subtitle";

const BlockCard = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={require("../../assets/splash.png")} style={styles.image} />
      <View style={styles.contentContainer}>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore
          maiores libero ut praesentium sequi. Impedit veniam fugiat fuga
          laborum rerum a officia, enim rem, qui quam, odio et ipsa.
        </Title>
        <Subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore
          maiores libero ut praesentium sequi. Impedit veniam fugiat fuga
          laborum rerum a officia, enim rem, qui quam, odio et ipsa.
        </Subtitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});

export default BlockCard;
