import SearchBar from "./app/components/SearchBar";
import Screen from "./app/components/Screen";
import FeaturedNews from "./app/components/FeaturedNews";
import BreakingNews from "./app/components/BreakingNews";
import data from "./fakeData";

export default function App() {
  const breakingNews = data.filter((item) => item.category === "breaking-news");
  console.log(breakingNews);
  return (
    <Screen>
      <SearchBar />
      {/*  <FeaturedNews /> */}
      <BreakingNews data={breakingNews} />
    </Screen>
  );
}
