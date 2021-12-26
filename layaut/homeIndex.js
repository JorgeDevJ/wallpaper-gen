import React from "react";
import Head from "next/head";
import Search from "../components/Search";
import Button from "../components/Button";

const HomeIndex = (props) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <header
        style={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        
        <Search />
      </header>
      {props.children}
    </>
  );
};

export default HomeIndex;
