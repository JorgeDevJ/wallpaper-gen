import Image from "next/image";
import styled from "styled-components";
import ButtonDownload from "./ButtonDownload";
import useBlurData from "use-next-blurhash";
const CardContainer = styled.main`
  display: flex;
  justify-content: center;
`;
const CardImageInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    width: 50rem;
  }
  width: 50%;
  .image_card {
    border-radius: 10px;
  }
`;

const DownloadItems = ({
  image,
  w,
  h,
  id_image,
  image_download,
  user,
  blur,
}) => {
  const [blurDataUrl] = useBlurData(blur);
  return (
    <CardContainer>
      <CardImageInfo>
        <Image
          className="image_card"
          src={image}
          alt={id_image}
          width={w}
          height={h}
          quality={50}
          priority
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
        <ButtonDownload
          url_image={image_download}
          user={user}
          id_image={id_image}
        />
      </CardImageInfo>
    </CardContainer>
  );
};

export default DownloadItems;
