import React from "react";
import Layout from "./../components/Layout";
import Card from "./../components/Card";
import tw from "twin.macro";
import players from "../../static/data";

// const Home = () => (
//   <Layout>
//     <div tw="px-4 py-4 bg-gray-200 uppercase font-bold text-base leading-none">
//       Goat Stats
//     </div>
//     {players.map(({ name, imgSrc, stats, id }) => (
//       <Card name={name} imageSrc={imgSrc} stats={stats} key={id} />
//     ))}
//   </Layout>
// );

const Wrapper = tw.main`px-0`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick = () => {
  //   console.log("click");
  //   this.setState((state, props) => ({
  //     state: !state.active,
  //   }));
  // };

  handleClick(cardIndex) {
    console.log("click me now", cardIndex);
    console.log("this", this);
    this.setState(state => ({
      activeCard: state.activeCard === cardIndex ? null : cardIndex,
    }));
    console.log("after");
  }

  render() {
    return (
      <Layout>
        {/* Header */}
        <div tw="px-4 py-4 bg-gray-200 uppercase font-bold text-base leading-none">
          Goat Stats: | {this.state.activeCard}
        </div>
        <Wrapper>
          {/* {players.slice(0, 1).map(({ name, imgSrc, stats, id }) => ( */}
          {players.map(({ name, imgSrc, stats, id }, index) => {
            console.log("playersmap: index", index);
            return (
              <Card
                name={name}
                imageSrc={imgSrc}
                stats={stats}
                key={id}
                active={this.state.activeCard === index}
                onClick={e => this.handleClick(index)}
              />
            );
          })}
        </Wrapper>
      </Layout>
    );
  }
}

export default Home;

// look, function, feel
// storymapping/storyboarding
