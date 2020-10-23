import React, { useState } from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import {
  RiEyeCloseLine,
  RiEyeLine,
  RiArrowUpLine,
  RiArrowDownLine,
} from "react-icons/ri";

export const StatWrapper = styled.div(({ active }) => [
  tw`flex justify-between border border-solid border-black w-full overflow-hidden`,
  `flex: 0 0 auto;`,
  active && tw`block border-none`,
  active &&
    `
  background: white;
  `,
]);

const StyledStatRow = styled.div(({ active, hidden }) => [
  tw`flex justify-between flex-col items-center`,
  `
  flex: 0 0 33%;
  `,
  active && tw`flex-row items-center`,
  hidden && tw`text-gray-400`,
]);

const StatNumber = tw.span`font-mono text-xl`;
const StatTitle = tw.h3`font-bold  text-sm uppercase flex-1`;
const StatIcon = tw.div`p-2 flex-initial`;

const StatRow = ({
  active,
  stat,
  statId,
  toggleVisibility,
  hidden,
  getStatById,
  value,
  name,
  editOrder,
}) => {
  return (
    <StyledStatRow active={active} hidden={hidden}>
      {active && (
        <StatIcon onClick={e => toggleVisibility(stat, e)}>
          {hidden ? <RiEyeCloseLine /> : <RiEyeLine />}
        </StatIcon>
      )}
      <StatTitle>{name ? name : stat.name}</StatTitle>
      <StatNumber>{value ? value : stat.value}</StatNumber>
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
