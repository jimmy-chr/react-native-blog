import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HorizontalList from "./lists/HorizontalList";

const TechNews = ({ data }) => {
  return <HorizontalList title="Tech news" data={data} />;
};

export default TechNews;

const styles = StyleSheet.create({});
