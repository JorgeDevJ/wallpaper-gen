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
  padding: 20px;
  @media (max-width: 700px) {
    width: 50rem;
  }
  width: 40rem;
`;

const CardMainGlobal = ({ image, w, h, id_image }) => {
  return (
    <CardContainer>
      <CardImageInfo>
        <Image
          className="image_card"
          src={image}
          alt={id_image}
          width={w}
          height={h}
          quality="90"
          priority
          placeholder="blur"
          blurDataURL
        />
      </CardImageInfo>
    </CardContainer>
  );
};

export default CardMainGlobal;
