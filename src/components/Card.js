import React, { useState } from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div(({ active }) => [
  tw`px-4 py-2 bg-pink-300 w-full flex relative z-10`,
  `
  height: calc((100vh - 3rem)/ 3);
  transition: all .3s ease;
  `,
  active && tw`w-screen h-screen top-0 left-0 pb-4 bg-pink-500 z-20`,
  active &&
    `
  position: absolute;
  top: 48px;
  height: calc(100vh - 48px);
  
  `,
]);

const StyledCard = styled.div(({ active }) => [
  tw`w-full h-full bg-white px-4 py-4 flex flex-col items-center space-y-4 rounded shadow-xl border-solid`,
  `
  transition: all .3s ease;
  flex: 0 0 100%;
  
  `,
  // active && tw`h-full`,
  active && `transition: all 3s`,
  ,
]);

// STATS

const mockMoreStats = [
  { id: 1, name: "Stat 1", value: 30.1 },
  { id: 2, name: "Stat 2", value: 6.2 },
  { id: 3, name: "Stat 3", value: 5.3 },
  { id: 4, name: "Stat 4", value: 30.1 },
  { id: 5, name: "Stat 5", value: 6.2 },
  { id: 6, name: "Stat 6", value: 5.3 },
  { id: 7, name: "Stat 7", value: 30.1 },
  { id: 8, name: "Stat 8", value: 6.2 },
  { id: 9, name: "Stat 9", value: 5.3 },
];

const StyledStatRow = styled.div(({ active, hidden }) => [
  tw`flex justify-between flex-col items-center`,
  active && tw`flex-row items-center`,
  hidden && tw`text-gray-400`,
]);

const StatNumber = tw.span`font-mono text-xl`;
const StatTitle = tw.h3`font-bold  text-sm uppercase flex-1`;

const StatRow = ({ active, stat, toggleVisibility, hidden }) => {
  return (
    <StyledStatRow active={active} hidden={hidden}>
      {active && (
        <div
          tw="bg-green-500 p-2 flex-initial"
          onClick={e => toggleVisibility(stat, e)}
        >
          eye
        </div>
      )}
      <StatTitle>{stat.name}</StatTitle>
      <StatNumber>{stat.value}</StatNumber>
    </StyledStatRow>
  );
};

const Card = ({ name, imageSrc, stats, active, onClick }) => {
  const [statVisibility, setStatVisibility] = useState([]);
  const [hiddenStatsVisibility, setHiddenStatsVisibility] = useState(true);

  const toggleStatVisibility = (stat, e) => {
    // prevent event bubbling
    // console.log("toggle visibility", name, e);
    e.stopPropagation();

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
  };

  const shouldHideStat = stat => {
    // console.log("shoudl show stat");
    const statIsHidden = statVisibility.find(x => {
      // console.log(`Stat: ${stat} : ID: ${stat.id} : x: ${x}`);
      return x === stat.id;
    });
    return statIsHidden;
  };

  const shouldShowStat = stat => {
    return !shouldHideStat(stat);
  };

  return (
    <Wrapper active={active} onClick={onClick}>
      <StyledCard active={active}>
        <div
          tw="w-32 h-32 rounded-full border-2 border-solid border-black"
          css={{
            backgroundSize: "cover",
            backgroundImage: `url(${imageSrc})`,
          }}
        ></div>
        <h2>{name}</h2>
        <div tw="flex justify-between border border-solid border-black w-full">
          {stats.map((x, i) => (
            <StatRow
              key={i}
              active={false}
              stat={x}
              toggleVisibility={toggleStatVisibility}
            />
          ))}
        </div>
        {active && (
          <div tw="w-full">
            {mockMoreStats.filter(shouldShowStat).map((stat, j) => (
              <StatRow
                key={j}
                active={active}
                stat={stat}
                toggleVisibility={toggleStatVisibility}
              />
            ))}
            <hr />

            <div
              onClick={e => {
                e.stopPropagation();
                setHiddenStatsVisibility(!hiddenStatsVisibility);
              }}
            >
              {hiddenStatsVisibility ? "Show Hidden Stas" : "Collapse"}
            </div>

            {!hiddenStatsVisibility && (
              <div>
                {mockMoreStats.filter(shouldHideStat).map((stat, j) => (
                  <StatRow
                    key={j}
                    active={active}
                    stat={stat}
                    toggleVisibility={toggleStatVisibility}
                    hidden
                  />
                ))}
              </div>
            )}
            {false && statVisibility.map((x, i) => <h2>{x}</h2>)}
            {statVisibility}
          </div>
        )}
      </StyledCard>
    </Wrapper>
  );
};

const statObjectInterface = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
});

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(statObjectInterface),
};

export default Card;

/*
import React from "react";
import tw, { styled } from "twin.macro";
import { Layout, Button, Logo } from "./../components";

const NavBtn = styled.a(() => [tw`bg-red-500 text-blue-500`])

const App = () => (
  <Layout
    css={[
      tw`flex flex-col items-center justify-center h-screen`,
      tw`bg-gradient-to-b from-electric to-ribbon`,
    ]}
  >
    <div tw="flex flex-col justify-center h-full space-y-5">
      <Button isPrimary>Send</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <NavBtn>asd</NavBtn>
    <Logo />
  </Layout>
);

export default App;
*/
