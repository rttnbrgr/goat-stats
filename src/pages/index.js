import React from "react";
import Layout from "./../components/Layout";
import Card from "./../components/Card";
import tw from "twin.macro";
import players from "../../static/data";

const Home = () => (
  <Layout>
    <div tw="px-4 py-4 bg-gray-200 uppercase font-bold text-base leading-none">
      Goat Stats
    </div>
    {players.map(({ name, imgSrc, stats, id }) => (
      <Card name={name} imageSrc={imgSrc} stats={stats} key={id} />
    ))}
  </Layout>
);

export default Home;
