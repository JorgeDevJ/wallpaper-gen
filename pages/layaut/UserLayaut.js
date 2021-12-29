import React from "react";
import Head from "next/head";
import Button from "../../components/Button";
const UserLayaut = (props) => {
  return (
    <>
      <Head>
        <title>User</title>
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

export default UserLayaut;
