import { useContext, useEffect } from "react";
import { UserInfo } from "../context/user";
import Image from "next/image";
import { auth } from "../services/firebase";
import { deleteUser } from "firebase/auth";
import { useRouter } from "next/router";
const user = auth.currentUser;

const Profile = () => {
  const router = useRouter();
  const { nombre, profileP, setLogin, login, setNombre, setProfileP } =
    useContext(UserInfo);
  /* const p = profileP; */

  const Logout = () => {
    auth.signOut();
    console.log(user);
    deleteUser(user).then(() => {
      setNombre("");
      setProfileP("");
    });
    router.replace("/").catch((error) => {
      console.log(error);
    });
  };
  return (
    <>
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
