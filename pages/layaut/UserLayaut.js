import React from "react";
import Head from "next/head";

const UserLayaut = (props) => {
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      {props.children}
    </>
  );
};

export default UserLayaut;
