import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import Global from "../styles/Global";
import Script from "next/script";
import "../styles/font.css";
import "../styles/normalize.css";
import "../styles/not_found.css";
import { UserInfo } from "../context/user";
function MyApp({ Component, pageProps }) {
  /* const init = () => {
    return JSON.parse(localStorage.getItem("value")) || { log: false };
  }; */

  const [nombre, setNombre] = useLocalStorage("user", "");
  const [profileP, setProfileP] = useLocalStorage("profile", "");
  const value = {
    nombre,
    setNombre,
    setProfileP,
    profileP,
  };
  /* useEffect(() => {
    init;
    localStorage.setItem("value", JSON.stringify(nombre));
  }, [nombre]); */

  return (
    <UserInfo.Provider value={value}>
      <Script src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"></Script>

      <Component {...pageProps} />
      <Global />
    </UserInfo.Provider>
  );
}

export default MyApp;
