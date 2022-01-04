import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const ContainerDivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  background-color: #000;
  border: 0;
  outline: none;
  color: #fff;
  padding: 7px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Catamaran", sans-serif;
  font-size: 16px;
  visibility: ${(props) => props.visible};
`;
const ListPages = ({ pageInit, pageFinish, prev, next }) => {
  return (
    <ContainerDivButton>
      <Button
        visible={parseInt(pageInit) === 1 ? "hidden" : "visible"}
        onClick={prev}
      >
        Page {pageInit - 1}
      </Button>
      <div
        style={{
          margin: "0 1rem",
        }}
      >
        <span>{pageInit}</span>
      </div>
      <Button onClick={next}>Page {parseInt(pageInit) + 1} </Button>
    </ContainerDivButton>
  );
};

ListPages.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func,
  pageInit: PropTypes.number,
  pageFinish: PropTypes.number,
};
export default ListPages;
