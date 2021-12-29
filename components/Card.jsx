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
  @(min-width: 1000px){
    padding: 10px 30% 10px 15px;
    font-size: 18px;
  }
  box-shadow: 0px 2px 100px 30px rgba(0, 0, 0, 0.6) inset;
  -webkit-box-shadow: 0px 2px 100px 30px rgba(0, 0, 0, 0.6) inset;
  -moz-box-shadow: 0px 2px 100px 30px rgba(0, 0, 0, 0.6) inset;
  border-radius: 0 10px 0 10px;
  padding: 5px 30% 5px 15px;
  display: flex;
  align-items: center;

  .spanInfo {
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 0 15px;
  }
  .image_card {
    border-radius: 100px;
  }
`;
const Card = ({ image, title, w, h, user, user_image, id_user, user_name }) => {
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
            width={30}
            height={30}
            quality="90"
            priority
            placeholder="blur"
            blurDataURL
          />
          <Link href={`/user/${user_name}`} passHref>
            <span className="spanInfo">{user}</span>
          </Link>
        </ContainerUsuario>
      </CardImageInfo>
    </CardContainer>
  );
};

export default Card;
