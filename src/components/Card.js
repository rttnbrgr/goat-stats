import React from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";

const Card = ({ name, imageSrc, stats }) => (
  <div tw="w-full bg-green-200 px-4 py-4 flex flex-col items-center space-y-4">
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
  </div>
);

const statObjectInterface = PropTypes.shape({
  name: PropTypes.string.isRequired,
  vale: PropTypes.number.isRequired,
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
