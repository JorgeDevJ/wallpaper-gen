import { useContext, useEffect } from "react";
import { UserInfo } from "../context/user";
import Image from "next/image";
const Profile = () => {
  const { nombre, profileP } = useContext(UserInfo);
  /* const p = profileP; */

  return (
    <>
      <h1>{nombre}</h1>
      {profileP !== "" ? (
        <Image src={profileP} alt={nombre} width={50} height={50} />
      ) : null}
    </>
  );
};

export default Profile;
