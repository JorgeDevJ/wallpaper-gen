import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
const Container = styled.div`
  display: inherit;
  .imageProfile {
    border-radius: 100px;
  }
`;

const User = ({ name, profile }) => {
  return (
    <Container>
      <span>{name}</span>
      {profile !== "" ? (
        <Link href="/profile" passHref>
          <Image
            className="imageProfile"
            src={profile}
            alt={name}
            quality={100}
            width={45}
            height={45}
          />
        </Link>
      ) : null}
    </Container>
  );
};

export default User;
