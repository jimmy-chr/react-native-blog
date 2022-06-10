import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HorizontalList from "./HorizontalList";

const BreakingNews = ({ data }) => {
  return <HorizontalList title="Breaking News" data={data} />;
};

export default BreakingNews;

const styles = StyleSheet.create({});
