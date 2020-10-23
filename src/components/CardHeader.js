import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const CardHeader = ({ name, imageSrc }) => {
  return (
    <div tw="w-full flex items-center justify-between flex-row-reverse">
      <div
        tw="w-16 h-16 rounded-full border-2 border-solid border-black"
        css={{
          backgroundSize: "cover",
          backgroundImage: `url(${imageSrc})`,
        }}
      ></div>
      <h2 tw="font-bold text-lg uppercase">{name}</h2>
    </div>
  );
};

CardHeader.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default CardHeader;
