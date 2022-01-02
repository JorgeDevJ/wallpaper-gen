import React from "react";
import Head from "next/head";
import Search from "../../components/Search";
import Button from "../../components/Button";

const ImageDownLayaut = (props) => {
  return (
    <>
      <Head>
        <title>Download</title>
      </Head>
      <header
        style={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button />
      </header>
      {props.children}
    </>
  );
};

export default ImageDownLayaut;
