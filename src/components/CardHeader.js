import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const CardHeader = ({ name, imageSrc }) => {
  return (
    <>
      <div
        tw="w-32 h-32 rounded-full border-2 border-solid border-black"
        css={{
          backgroundSize: "cover",
          backgroundImage: `url(${imageSrc})`,
        }}
      ></div>
      <h2>{name}</h2>
    </>
  );
};

CardHeader.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default CardHeader;
