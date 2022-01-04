import { useContext } from "react";

import Head from "next/head";
import Search from "../../components/Search";
import Button from "../../components/Button";
import { UserInfo } from "../../context/user";
import User from "../../components/User";
import styled from "styled-components";
const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
`;
const SearchAnduser = styled.div`
  display: flex;
  align-items: center;
`;
const HomeIndex = (props) => {
  const { nombre, profileP } = useContext(UserInfo);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header>
        <Button />
        <SearchAnduser>
          <Search />
          <User profile={profileP} />
        </SearchAnduser>
      </Header>
      {props.children}
    </>
  );
};

export default HomeIndex;
