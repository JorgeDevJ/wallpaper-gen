import React from "react";
import Head from "next/head";
const homeIndex = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {props.children}
    </>
  );
};

export default homeIndex;
