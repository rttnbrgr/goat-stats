import React, { useState } from "react";
import Layout from "./../components/Layout";
import Card from "./../components/Card";
import tw from "twin.macro";
import players from "../../static/data";

const Wrapper = tw.main`px-0`;

const statisticMaster = [
  { id: "STAT-PTS", name: "PTS", visible: true },
  { id: "STAT-AST", name: "AST", visible: true },
  { id: "STAT-REB", name: "REB", visible: true },
  { id: "STAT-4", name: "Stat 4", visible: true },
  { id: "STAT-5", name: "Stat 5", visible: true },
  { id: "STAT-6", name: "Stat 6", visible: true },
  { id: "STAT-7", name: "Stat 7", visible: true },
  { id: "STAT-8", name: "Stat 8", visible: true },
  { id: "STAT-9", name: "Stat 9", visible: true },
];

function Home() {
  const [activeCard, setActiveCard] = useState(null);

  const cardClick = cardIndex => {
    setActiveCard(activeCard === cardIndex ? null : cardIndex);
  };

  return (
    <Layout>
      <div tw="px-4 py-4 bg-gray-200 uppercase font-bold text-base leading-none">
        Goat Stats
      </div>
      <Wrapper>
        {players.map(({ name, imgSrc, stats, id }, index) => {
          return (
            <Card
              name={name}
              imageSrc={imgSrc}
              stats={stats}
              key={id}
              active={activeCard === index}
              onClick={() => cardClick(index)}
            />
          );
        })}
      </Wrapper>
    </Layout>
  );
}

export default Home;
