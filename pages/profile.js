import { useContext } from "react";
import { UserInfo } from "../context/user";
import Image from "next/image";
import { auth } from "../services/firebase";
import styled from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
const user = auth.currentUser;

const Profile = () => {
  const router = useRouter();
  const { nombre, profileP, setLogin, login, setNombre, setProfileP } =
    useContext(UserInfo);
  /* const p = profileP; */

  const Logout = () => {
    if (user !== "") {
      auth.signOut().then(() => {
        setNombre("");
        setProfileP("");
        router.replace("/").catch((error) => {
          console.log(error);
        });
      });
    } else {
      console.log(user);
    }
  };
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Container>
        <h1>{nombre}</h1>

        {nombre !== "" ? (
          <>
            <Image
              className="image"
              src={profileP}
              alt={nombre}
              width={100}
              height={100}
            />
            <ButtonLogout onClick={Logout}>Logout</ButtonLogout>
          </>
        ) : null}
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  .image {
    border-radius: 100px;
  }
`;
const ButtonLogout = styled.button`
  background-color: #000;
  border: 0;
  outline: none;
  color: #fff;
  padding: 15px 60px;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Catamaran", sans-serif;
  font-size: 22px;
  margin: 2rem 0;
`;
export default Profile;
