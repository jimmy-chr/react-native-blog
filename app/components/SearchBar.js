import { View, TextInput, StyleSheet } from "react-native";
import SearchModel from "./common/SearchModel";
import { useState } from "react";
import newsApi from "../api/newsApi";

let timeoutId;

const debounce = (func, delay) => {
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const SearchBar = ({ setIsSearchFocused }) => {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState("");

  const handleSearch = async (value) => {
    const result = await newsApi.searchPost(value);
    if (result.success) {
      setNotFound("");
      setData(result.news);
    }

    if (!result.success) {
      setNotFound(result.message);
    }
  };

  const debounceSearch = debounce(handleSearch, 500);

  const handleChange = ({ nativeEvent }) => {
    const { text } = nativeEvent;
    setQuery(text);
    setVisible(true);
    debounceSearch(query);
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={query}
          placeholder="Search here..."
          style={styles.searchInput}
          onChange={handleChange}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => {
            setIsSearchFocused(false);
            setQuery("");
            setVisible(false);
            setData([]);
            setNotFound("");
          }}
        />
      </View>
      <SearchModel visible={visible} data={data} notFound={notFound} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
    fontSize: 16,
  },
});

export default SearchBar;
