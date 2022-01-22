import { useContext } from "react";
import Button from "../../components/Button";
import Head from "next/head";
import Search from "../../components/Search";
import { UserInfo } from "../../context/user";
import User from "../../components/User";
import styled from "styled-components";
import Link from "next/link";
import { ButtonLogin } from "../login";
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
          {nombre !== "" ? (
            <User profile={profileP} />
          ) : (
            <Link href={"/login"} passHref>
              <ButtonLogin>
                <a>Register</a>
              </ButtonLogin>
            </Link>
          )}
        </SearchAnduser>
      </Header>
      {props.children}
    </>
  );
};

export default HomeIndex;
