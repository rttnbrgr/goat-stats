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
  const [masterStats, setMasterStats] = useState(statisticMaster);

  const cardClick = cardIndex => {
    setActiveCard(activeCard === cardIndex ? null : cardIndex);
  };

  const toggleStatVisibility = (stat, e) => {
    // prevent event bubbling
    console.log("toggle visibility: event", e);
    console.log("toggle visibility: stat", stat);
    e.stopPropagation();

    // const matchingStat = getStatById(stat.id);
    console.log("build a new array");
    console.log("=================");
    const newStatisticMaster = statisticMaster.map(x => {
      const isMatch = stat.id === x.id;
      if (isMatch) {
        console.log("match: ", x);
        x.visible = !x.visible;
        console.log("match after: ", x);
        return x;
      }
      console.log("no match: ", x);
      return x;

      // x.id ===
      // if not a match, return key
      // if match,
      // toggle visibility
      // return
    });

    setMasterStats(newStatisticMaster);

    // setMasterStats(prevStats => prevStats.find(x => x.id === stat.id).)
    /*

    console.log("statVisibility", statVisibility);
    // check if the stat exists, if it does, remove it
    const isStatHidden =
      !!statVisibility.length && statVisibility.includes(stat.id);
    console.log(`isStatHidden? ${isStatHidden}`);

    if (isStatHidden) {
      const newStats = statVisibility.filter(x => x !== stat.id);
      setStatVisibility(newStats);
      return;
    }

    // build new array
    const newStats = [...statVisibility, stat.id];
    setStatVisibility(newStats);
    console.log("statVisibility: after", statVisibility);
    */
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
