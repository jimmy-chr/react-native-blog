import SearchBar from "./app/components/SearchBar";
import Screen from "./app/components/Screen";
import FeaturedNews from "./app/components/FeaturedNews";
import BreakingNews from "./app/components/BreakingNews";
import TechNews from "./app/components/TechNews";
import data from "./fakeData";

export default function App() {
  const breakingNews = data.filter((item) => item.category === "breaking-news");
  const techNews = data.filter((item) => item.category === "tech");
  return (
    <Screen>
      <SearchBar />
      <FeaturedNews
        item={{
          id: "1",
          title: "This is the title no one.",
          desc: "Desc is the short form of description and this format is the actual same as our real database.",
          thumbnail: "https://loremflickr.com/400/200/",
          category: "breaking-news",
        }}
      />
      <BreakingNews data={breakingNews} />
      <TechNews data={techNews} />
    </Screen>
  );
}
