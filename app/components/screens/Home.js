import { StyleSheet } from "react-native";
import React from "react";
import useNews from "../../hooks/useNews";
import Screen from "../common/Screen";
import SearchBar from "../SearchBar";
import FeaturedNews from "../FeaturedNews";
import BreakingNews from "../BreakingNews";
import PoliticalNews from "../PoliticalNews";
import TechNews from "../TechNews";
import EntertainmentNews from "../EntertainmentNews";

const Home = () => {
  const {
    featuredNews,
    breakingNews,
    politicalNews,
    techNews,
    entertainmentNews,
  } = useNews();

  return (
    <Screen>
      <SearchBar />
      <FeaturedNews item={featuredNews} />
      <BreakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews} />
      <TechNews data={techNews} />
      <EntertainmentNews data={entertainmentNews} />
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({});
