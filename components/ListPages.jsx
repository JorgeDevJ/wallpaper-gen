import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const ContainerDivButton = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  background-color: #000;
  border: 0;
  outline: none;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
`;
const ListPages = (props) => {
  const router = useRouter();
  const { q, page } = router.query;
  const nextPage = () => {
    const number = parseInt(page);
    console.log(number);
    router.push(`/search?q=${q}&page=${(number += 1)}`, undefined, {
      shallow: true,
    });

    console.log(router);
  };
  const prevPage = () => {
    const number = parseInt(page);
    console.log(number);
    router.push(`/search?q=${q}&page=${number - 1}`, undefined, {
      shallow: true,
    });

    console.log(router);
  };
  return (
    <ContainerDivButton>
      <Button onClick={prevPage}>Anterior pagina</Button>
      {props.children}
      <Button onClick={nextPage}>Siquiete pagina</Button>
    </ContainerDivButton>
  );
};

export default ListPages;
