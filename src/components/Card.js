import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const StyledCard = tw.div`w-full bg-green-200 px-4 py-4 flex flex-col items-center space-y-4 rounded shadow-xl`;

const CardWrapper = styled.div(({ active }) => [
  tw`px-4 py-2`,
  `
  height: calc((100vh - 48px - 16px )/ 3);
  transition: all .3s ease;
  `,
  active && tw`w-screen h-screen top-0 left-0 pb-4 bg-pink-500`,
  active &&
    `
  position: absolute;
  top: 48px;
  height: calc(100vh - 48px);
  `,
]);

const StyledCard2 = styled.div(({ active }) => [
  tw`w-full h-full bg-white px-4 py-4 flex flex-col items-center space-y-4 rounded shadow-xl border border-solid`,
  `transition: all .3s ease;`,
  // active && tw`h-full`,
  active && `transition: all 3s`,
  ,
]);

const mockMoreStats = [
  { name: "Stat 1", value: 30.1 },
  { name: "Stat 2", value: 6.2 },
  { name: "Stat 3", value: 5.3 },
  { name: "Stat 4", value: 30.1 },
  { name: "Stat 5", value: 6.2 },
  { name: "Stat 6", value: 5.3 },
  { name: "Stat 7", value: 30.1 },
  { name: "Stat 8", value: 6.2 },
  { name: "Stat 9", value: 5.3 },
];

const StatRow = styled.div(({ active }) => [tw`flex justify-between`]);

const StatNumber = tw.span`font-mono text-xl`;
const StatTitle = tw.h3`font-bold  text-sm uppercase`;

const Card = ({ name, imageSrc, stats, active, onClick }) => (
  <CardWrapper active={active} onClick={onClick}>
    <StyledCard2 active={active}>
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
          <div tw="flex flex-1 flex-col text-center" key={i}>
            <h3 tw="font-bold text-sm uppercase">{x.name}</h3>
            <span tw="font-mono text-xl">{x.value}</span>
          </div>
        ))}
      </div>
      {active && (
        <div tw="w-full">
          {mockMoreStats.map((stat, j) => (
            <div tw="flex flex-1 justify-between text-center" key={j}>
              <h3 tw="font-bold text-sm uppercase">{stat.name}</h3>
              <span tw="font-mono text-xl">{stat.value}</span>
            </div>
          ))}
        </div>
      )}
    </StyledCard2>
  </CardWrapper>
);

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
