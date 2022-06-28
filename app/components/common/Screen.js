import { ScrollView, StyleSheet, StatusBar } from "react-native";

const Screen = ({ children, isSearchFocused }) => {
  const keyboardShouldPersistTaps = isSearchFocused ? "always" : "never";
  return (
    <ScrollView
      scrollEnable={!isSearchFocused}
      style={styles.container}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: "#f7f3f3",
    flex: 1,
  },
});

export default Screen;
