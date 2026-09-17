import { Suspense } from "react";
import HeroSection from "./HeroSection";
import HomeCard from "./HomeCard";

const data = fetch("/public/data.json").then((res) => res.json());

const Home = () => {
  return (
    <section>
      <HeroSection />
      <Suspense>
        <HomeCard data={data}  />
      </Suspense>
    </section>
  );
};

export default Home;
