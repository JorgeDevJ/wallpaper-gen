import { useContext, useEffect } from "react";
import { UserInfo } from "../context/user";
import Image from "next/image";
import { auth } from "../services/firebase";
import { deleteUser } from "firebase/auth";
import { useRouter } from "next/router";
import Head from 'next/head'
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
        deleteUser(user).then(() => {});
        router.replace("/").catch((error) => {
          console.log(error);
        });
      });
    } else {
      console.log(user);
    }
    /* if (user !== null) {
      deleteUser(user).then(() => {});
      router.replace("/").catch((error) => {
        console.log(error);
      });
    } else {
      null;
    } */
  };
  return (
    <>
    <Head>
      <title>Profile</title>
    </Head>
      <h1>{nombre}</h1>
      {console.log(login)}
      {nombre !== "" ? (
        <>
          <Image src={profileP} alt={nombre} width={50} height={50} />
          <button onClick={Logout}>Logout</button>
        </>
      ) : null}
    </>
  );
};

export default Profile;
