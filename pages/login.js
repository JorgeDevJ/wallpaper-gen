import { useContext, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { UserInfo } from "../context/user";
import Image from "next/image";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  const { nombre, setNombre, profileP, setProfileP } = useContext(UserInfo);

  const register = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        setNombre(displayName);
        setProfileP(photoURL);
        console.log("sesion iniciada");
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      } else {
        <div>error</div>;
      }
    });
  }, [nombre]);
  return (
    <>
      <form onSubmit={register}>
        <button onSubmit={register}>Iniciar secion con google</button>
      </form>
    </>
  );
};

export default Login;
