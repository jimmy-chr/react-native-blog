import { StyleSheet } from "react-native";
import React, { useState } from "react";
import useNews from "../../hooks/useNews";
import Screen from "../common/Screen";
import SearchBar from "../SearchBar";
import FeaturedNews from "../FeaturedNews";
import BreakingNews from "../BreakingNews";
import PoliticalNews from "../PoliticalNews";
import TechNews from "../TechNews";
import EntertainmentNews from "../EntertainmentNews";
import Loader from "../common/Loader";

const Home = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const {
    featuredNews,
    breakingNews,
    politicalNews,
    techNews,
    entertainmentNews,
    loading,
  } = useNews();

  return (
    <>
      <Loader visible={loading} />
      <Screen isSearchFocused={isSearchFocused}>
        <SearchBar setIsSearchFocused={setIsSearchFocused} />
        <FeaturedNews item={featuredNews} />
        <BreakingNews data={breakingNews} />
        <PoliticalNews data={politicalNews} />
        <TechNews data={techNews} />
        <EntertainmentNews data={entertainmentNews} />
      </Screen>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
