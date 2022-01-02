import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import useLocalStorage from "use-local-storage";
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
  bottom: 3.5px;
  @media (min-width: 1000px) {
    padding: 10px 30% 10px 15px;
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
    @media (min-width: 1000px) {
      font-size: 18px;
    }
  }
  .image_card {
    border-radius: 100px;
  }
`;
const FavoriteContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: #000;
  padding: 10px;
  border-radius: 0 0 0 5px;
`;

const Card = ({
  image,
  title,
  w,
  h,
  user,
  user_image,
  id_user,
  user_name,
  id_image,
}) => {
  const [favorite, setFavorite] = useLocalStorage("value", false);
  const [lisFavorite, setListFavorite] = useLocalStorage("id", []);
  const handleFavorite = (e) => {
    const item = [e.target.id];
    setFavorite(!favorite);
    setListFavorite([...item]);
  };
  return (
    <CardContainer>
      <CardImageInfo>
        <Link href={`/photo/${id_image}`} passHref>
          <Image
            className="image_card"
            src={image}
            alt={id_image}
            width={w}
            height={h}
            quality={50}
            /*loading={lazy o eager} */
            placeholder="blur"
            blurDataURL
          />
        </Link>
        <ContainerUsuario>
          <Image
            className="image_card"
            src={user_image}
            alt={id_user}
            width={30}
            height={30}
            placeholder="blur"
            blurDataURL
          />
          <Link href={`/user/${user_name}`} passHref>
            <span className="spanInfo">{user}</span>
          </Link>
        </ContainerUsuario>
        {/* <FavoriteContainer value={id_image} onClick={handleFavorite}>
          {favorite ? (
            <box-icon
              id={id_image}
              name="heart"
              color="#fff"
              type="solid"
            ></box-icon>
          ) : (
            <box-icon
              id={id_image}
              name="heart"
              color="#fff"
              type="regular"
            ></box-icon>
          )}
        </FavoriteContainer> */}
      </CardImageInfo>
    </CardContainer>
  );
};

export default Card;
