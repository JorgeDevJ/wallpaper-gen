import React from "react";
import Link from "next/link";
import Image from "next/image";
import JsFileDownloader from "js-file-downloader";
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
const CardMainGlobal = ({
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
  const downloadImage = (e) => {
    e.preventDefault();
    new JsFileDownloader({
      url: image,
      headers: [{ name: id_image }],
    })
      .then(function () {
        console.log("descarga completa");
      })
      .catch(function (error) {
        consoloe.log(error);
      });
  };
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
        {/* <a href={image} download={id_image}>
          descargar
        </a> */}
        <button onClick={downloadImage}>Descargar</button>
      </CardImageInfo>
    </CardContainer>
  );
};

export default CardMainGlobal;
