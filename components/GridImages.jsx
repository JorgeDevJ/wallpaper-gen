import React from "react";
import styled from "styled-components";
const Grid = styled.main`
  column-gap: 10px;
  -webkit-column-gap: 10px;
  -moz-column-gap: 10px;
  -webkit-column-width: 400px;
  -moz-column-width: 400px;
  column-width: 400px;
  counter-reset: item;
  list-style: none;
  margin: 0 auto;
  padding: 20px 10px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;
const GridImages = (props) => {
  return <Grid>{props.children}</Grid>;
};

export default GridImages;
