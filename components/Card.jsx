import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
const CardContainer = styled.div`
  margin-bottom: 10px;
  .image_card {
    border-radius: 10px;
  }
`;
const CardImageInfo = styled.div`
  position: relative;
`;
const ContainerUsuario = styled.div`
  position: absolute;
  bottom: 3px;
  border-radius: 0 10px 0 10px;
  box-shadow: 0px 2px 100px 30px rgba(0, 0, 0, 0.6) inset;
  -webkit-box-shadow: 0px 2px 100px 30px rgba(0, 0, 0, 0.6) inset;
  -moz-box-shadow: 0px 2px 100px 30px rgba(0, 0, 0, 0.6) inset;
  padding: 10px 50% 10px 15px;
  display: flex;
  align-items: center;

  .spanInfo {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 0 15px;
  }
  .image_card {
    border-radius: 100px;
  }
`;
const Card = ({ image, title, w, h, user, user_image, id_user }) => {
  const newName = user.replace(/ /g, "");
  return (
    <CardContainer>
      <CardImageInfo>
        <Image
          className="image_card"
          src={image}
          alt={title}
          width={w}
          height={h}
          quality="90"
          priority
          placeholder="blur"
          blurDataURL
        />
        <ContainerUsuario>
          <Image
            className="image_card"
            src={user_image}
            alt={id_user}
            width={50}
            height={50}
            quality="90"
            priority
            placeholder="blur"
            blurDataURL
          />
          <Link href={`/user/${user}`} passHref>
            <span className="spanInfo">{user}</span>
          </Link>
        </ContainerUsuario>
      </CardImageInfo>
    </CardContainer>
  );
};

export default Card;
