import { useContext, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { UserInfo } from "../context/user";
import { useRouter } from "next/router";
import styled from "styled-components";
import Head from "next/head";
const Main = styled.form`
  display: flex;
  justify-content: center;
  transform: translate(0px, 50vh);
`;
export const ButtonLogin = styled.button`
  border: none;
  background: #000;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  outline: none;
`;
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
      <Head>
        <title>Login</title>
      </Head>
      <Main onSubmit={register}>
        <ButtonLogin onClick={signInGoogle}>Login with Google</ButtonLogin>
      </Main>
    </>
  );
};

export default Login;
