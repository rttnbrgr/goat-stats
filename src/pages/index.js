import React, { useState } from "react";
import Layout from "./../components/Layout";
import Card from "./../components/Card";
import tw from "twin.macro";
import players, { statisticMaster } from "../../static/data";

const Wrapper = tw.main`px-0`;

function Home() {
  const [activeCard, setActiveCard] = useState(null);
  const [masterStats, setMasterStats] = useState(statisticMaster);

  const cardClick = cardIndex => {
    setActiveCard(activeCard === cardIndex ? null : cardIndex);
  };

  const toggleStatVisibility = (stat, e) => {
    e.stopPropagation();
    // build new array
    const newStatisticMaster = statisticMaster.map(x => {
      // fiind the match
      const isMatch = stat.id === x.id;
      if (isMatch) {
        // change its visibility setting;
        // consider moving it to a new array to handle hidden stats
        x.visible = !x.visible;
        return x;
      }
      // if no match
      return x;
    });
    setMasterStats(newStatisticMaster);
  };

  const editStatOrder = (e, statId, direction) => {
    e.stopPropagation();
    console.warn("==== editStatOrder ====");
    console.log(`move ${statId} ${direction}`);

    if (direction === "down") {
      const thisIndex = masterStats.findIndex(x => x.id === statId);
      const thisStat = masterStats[thisIndex];
      const thatStat = masterStats[thisIndex + 1];
      const newStart = masterStats.slice(0, thisIndex);
      const newEnd = masterStats.slice(thisIndex + 2);
      const newStatisticMaster = [...newStart, thatStat, thisStat, ...newEnd];
      setMasterStats(newStatisticMaster);
    }

    if (direction === "up") {
      const thisIndex = masterStats.findIndex(x => x.id === statId);
      const thisStat = masterStats[thisIndex];
      const thatStat = masterStats[thisIndex - 1];
      const newStart = masterStats.slice(0, thisIndex - 1);
      const newEnd = masterStats.slice(thisIndex + 1);
      // REBUILD
      const newStatisticMaster = [...newStart, thisStat, thatStat, ...newEnd];
      console.log("masterSTats", masterStats);
      console.log("statisticsMaster", statisticMaster);
      console.log("thisIndex", thisIndex);
      console.log("thisStat", thisStat);
      console.log("thatStat", thatStat);
      console.log("start", newStart);
      console.log("end", newEnd);
      console.log("newStatisticMaster", newStatisticMaster);
      setMasterStats(newStatisticMaster);
    }
    // Debugs
  };

  const getStatById = statId =>
    statisticMaster.find(stat => stat.id === statId);

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
              masterStats={masterStats}
              getStatById={getStatById}
              toggleStat={toggleStatVisibility}
              editStatOrder={editStatOrder}
            />
          );
        })}
      </Wrapper>
    </Layout>
  );
}

export default Home;
