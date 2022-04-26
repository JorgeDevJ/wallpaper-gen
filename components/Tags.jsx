import React from "react";
import categories from "../services/categories.json";
import Flicking from "@egjs/react-flicking";
import styled from "styled-components";
import { ButtonM } from "./Button";
const UlList = styled.ul`
  display: flex;
  padding: 0 !important;
  & > li {
    margin: 0 10px 0 0;
  }
`;
const ListItem = styled.li`
  background-color: #000;
  border: 0;
  outline: none;
  color: #fff;
  padding: 5px 6%;
  width: 20rem;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Catamaran", sans-serif;
  font-size: 15px;
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
`;
const Container = styled.div`
  margin: 2rem;
`;
const Tags = () => {
  return (
    <Flicking circular={true} onMoveEnd={(e) => console.log(e)}>
      <Container>
        <UlList>
          {categories.map(({ item, key }) => {
            return <ListItem key={key}>{item}</ListItem>;
          })}
        </UlList>
      </Container>
    </Flicking>
  );
};

export default Tags;
