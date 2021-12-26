import { useState } from "react";
import styled from "styled-components";
import Router from "next/router";
import { useRouter } from "next/router";

const ContainerInput = styled.div`
  background-color: #000;
  display: flex;
  align-items: center;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 100px;
  width: 44px;
  height: 44px;
  transition: 0.2s;
  &:hover {
    width: 30vh;
    background: transparent;
  }
`;
const Form = styled.form``;
const Input = styled.input`
  background-color: #000;
  border: none;
  outline: none;
  padding: 15px;
  border-radius: 100px;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  color: #fff;
  ${ContainerInput}:hover & {
    z-index: 1;
    width: 100%;
  }
  &::placeholder {
    opacity: 0.5;
    color: #fff;
  }
`;
const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    /* history.push(`?q=${inputValue}`); */
  };
  const handleInout = (e) => {
    const value = e.target.value;
    setInputValue(value);
    router.push(`/s/${value}`);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <ContainerInput>
        <box-icon name="search" color="#ffffff"></box-icon>
        <Input
          onKeyUp={(e) => (e.key === "Enter" ? handleInout(e) : null)}
          type="text"
          placeholder="cat, dog, table, house..."
        />
      </ContainerInput>
    </Form>
  );
};
/* onKeyUp={(e) => (e.key === "Enter" ? funcSearch(e) : null)} */
export default Search;
