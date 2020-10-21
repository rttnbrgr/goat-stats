import React, { useState } from "react";
import Layout from "./../components/Layout";
import Card from "./../components/Card";
import tw from "twin.macro";
import players from "../../static/data";

const Wrapper = tw.main`px-0`;

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
