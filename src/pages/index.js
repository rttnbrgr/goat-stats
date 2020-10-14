import React from "react";
import Layout from "./../components/Layout";
import tw from "twin.macro";

const sampleStats = [
  { name: "Pts", value: 25.0 },
  { name: "Reb", value: 5.2 },
  { name: "Ast", value: 4.7 },
];

const playerMike = {
  id: 0,
  name: "Mike",
  imgSrc:
    "https://www.basketball-reference.com/req/202010061/images/players/jordami01.jpg",
  stats: [
    { name: "Pts", value: 30.1 },
    { name: "Reb", value: 6.2 },
    { name: "Ast", value: 5.3 },
  ],
};

const playerKobe = {
  id: 1,
  name: "Kobe",
  imgSrc:
    "https://www.basketball-reference.com/req/202010061/images/players/bryanko01.jpg",

  stats: [
    { name: "Pts", value: 25.0 },
    { name: "Reb", value: 5.2 },
    { name: "Ast", value: 4.7 },
  ],
};

const playerBron = {
  id: 2,
  name: "Bron",
  imgSrc:
    "https://www.basketball-reference.com/req/202010061/images/players/jamesle01.jpg",
  stats: [
    { name: "Pts", value: 27.1 },
    { name: "Reb", value: 7.4 },
    { name: "Ast", value: 7.4 },
  ],
};

const players = [playerMike, playerKobe, playerBron];

const Card = props => (
  <div tw="w-full bg-green-200 px-4 py-4 flex flex-col items-center space-y-4">
    {/* 
    <img
      src="https://randomuser.me/api/portraits/men/32.jpg"
      alt=""
      tw="w-32 h-32 rounded-full"
    /> 
    */}
    <div
      tw="w-32 h-32 rounded-full border-2 border-solid border-black"
      css={{
        backgroundSize: "cover",
        backgroundImage: `url(${props.player.imgSrc})`,
      }}
    ></div>

    <h2>{props.player.name}</h2>
    <div tw="flex justify-between border border-solid border-black w-full">
      {props.player.stats.map((x, i) => (
        <div tw="flex flex-1 flex-col text-center" key={i}>
          <h3 tw="font-bold text-sm uppercase">{x.name}</h3>
          <span tw="font-mono text-xl">{x.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const Home = () => (
  <Layout>
    <div tw="px-4 py-4 bg-gray-200 uppercase font-bold text-base leading-none">
      Goat Stats
    </div>
    {players.map(player => (
      <Card player={player} key={player.id} />
    ))}
  </Layout>
);

export default Home;

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
