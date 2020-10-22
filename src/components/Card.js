import React, { useState } from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import StatRow from "./Stat";
import CardHeader from "./CardHeader";

const Wrapper = styled.div(({ active }) => [
  tw`px-4 py-2 bg-pink-300 w-full flex relative z-10`,
  `
  height: calc((100vh - 3rem)/ 1);
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

const StatWrapper = styled.div(({ active }) => [
  tw`flex justify-between border border-solid border-black w-full overflow-hidden`,
  active && tw`block border-none`,
  active &&
    `
  background: white;
  `,
]);

// STATS

const mockMoreStats = [
  { id: 1, name: "PTS", value: 30.1 },
  { id: 2, name: "AST", value: 6.2 },
  { id: 3, name: "REB", value: 5.3 },
  { id: 4, name: "Stat 4", value: 30.1 },
  { id: 5, name: "Stat 5", value: 6.2 },
  { id: 6, name: "Stat 6", value: 5.3 },
  { id: 7, name: "Stat 7", value: 30.1 },
  { id: 8, name: "Stat 8", value: 6.2 },
  { id: 9, name: "Stat 9", value: 5.3 },
];

const Card = ({
  name,
  imageSrc,
  stats,
  active,
  onClick,
  masterStats,
  getStatById,
  toggleStat,
  editStatOrder,
}) => {
  const [statVisibility, setStatVisibility] = useState([]);
  const [hiddenStatsVisibility, setHiddenStatsVisibility] = useState(true);

  const toggleStatVisibilityOld = (stat, e) => {
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
        <CardHeader imageSrc={imageSrc} name={name} />
        <StatWrapper active={active}>
          {masterStats
            .filter(x => x.visible)
            .map((mStat, j) => {
              const matchedStat = stats.find(x => x.id === mStat.id);
              if (!matchedStat) {
                console.error("no matched stat for", mStat, "player: ", name);
                return null;
              }
              return (
                <StatRow
                  key={j}
                  active={active}
                  stat={matchedStat}
                  statId={mStat.id}
                  name={mStat.name}
                  value={matchedStat.value}
                  toggleVisibility={toggleStat}
                  editOrder={editStatOrder}
                />
              );
            })}
        </StatWrapper>

        {active && (
          <div tw="w-full">
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
              <>
                {masterStats
                  .filter(x => !x.visible)
                  .map((mStat, j) => {
                    const matchedStat = stats.find(x => x.id === mStat.id);
                    if (!matchedStat) {
                      console.error("no matched stat");
                      return null;
                    }
                    return (
                      <StatRow
                        key={j}
                        active={active}
                        stat={matchedStat}
                        statId={mStat.id}
                        name={mStat.name}
                        value={matchedStat.value}
                        toggleVisibility={toggleStat}
                        editOrder={editStatOrder}
                      />
                    );
                  })}
              </>
            )}
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
