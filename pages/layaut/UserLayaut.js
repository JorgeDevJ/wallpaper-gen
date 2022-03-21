import { useContext } from "react";
import Head from "next/head";
import Button from "../../components/Button";
import styled from "styled-components";
import Link from "next/link";
import { UserInfo } from "../../context/user";
import User from "../../components/User";
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
const UserLayaut = (props) => {
  const { nombre, profileP } = useContext(UserInfo);
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <Header>
        <Button />
        <SearchAnduser>
          {nombre !== "" ? (
            <User profile={profileP} />
          ) : (
            <Link href={"/login"}>
              <a>Registrate</a>
            </Link>
          )}
        </SearchAnduser>
      </Header>
      {props.children}
    </>
  );
};

export default UserLayaut;
