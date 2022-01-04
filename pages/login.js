import { useContext, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { UserInfo } from "../context/user";
import Image from "next/image";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  const { nombre, setNombre, setProfileP, setLogin } = useContext(UserInfo);

  const register = (e) => {
    e.preventDefault();
  };
  const signInGoogle = () => {
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
  const signInFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        /* const displayName = user.displayName;
        const photoURL = user.photoURL;
        setNombre(displayName);
        setProfileP(photoURL); */
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(true);
        router.replace("/");
      } else {
        <div>error</div>;
      }
    });
  }, [nombre, router]);
  return (
    <>
      <form onSubmit={register}>
        <button onClick={signInGoogle}>Iniciar secion con google</button>
      </form>
    </>
  );
};

export default Login;
