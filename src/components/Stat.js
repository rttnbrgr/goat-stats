import React, { useState } from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import {
  RiEyeCloseLine,
  RiEyeLine,
  RiArrowUpLine,
  RiArrowDownLine,
} from "react-icons/ri";

const StyledStatRow = styled.div(({ active, hidden }) => [
  tw`flex justify-between flex-col items-center`,
  active && tw`flex-row items-center`,
  hidden && tw`text-gray-400`,
]);

const StatNumber = tw.span`font-mono text-xl`;
const StatTitle = tw.h3`font-bold  text-sm uppercase flex-1`;
const StatIcon = tw.div`p-2 flex-initial`;

const StatRow = ({ active, stat, toggleVisibility, hidden }) => {
  const toggleFoo = e => {
    e.stopPropagation();
    console.log("foo");
  };
  return (
    <StyledStatRow active={active} hidden={hidden}>
      {active && (
        <StatIcon onClick={e => toggleVisibility(stat, e)}>
          {hidden ? <RiEyeCloseLine /> : <RiEyeLine />}
        </StatIcon>
      )}
      <StatTitle>{stat.name}</StatTitle>
      <StatNumber>{stat.value}</StatNumber>
      {active && (
        <>
          <StatIcon onClick={e => editOrder(e, statId, "up")}>
            <RiArrowUpLine />
          </StatIcon>
          <StatIcon onClick={e => editOrder(e, statId, "down")}>
            <RiArrowDownLine />
          </StatIcon>
        </>
      )}
    </StyledStatRow>
  );
};

export default StatRow;
