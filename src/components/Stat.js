import React, { useState } from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

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

export default StatRow;
