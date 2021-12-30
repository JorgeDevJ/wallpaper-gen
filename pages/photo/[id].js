import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getIdPhoto } from "../../services/apiconfig/indexApi";
import Head from "next/head";
import CardMainGlobal from "../../components/CardMainGlobal";
import { ImageDownloader } from "@samvera/image-downloader";
const IdPhoto = () => {
  const router = useRouter();
  const { query } = router;
  const [image, setImage] = useState([]);
  const getImageId = async (idP) => {
    try {
      const { data } = await getIdPhoto({
        params: {
          id: idP,
        },
      });
      const response = await data.data;
      setImage([response]);
    } catch (error) {}
  };
  useEffect(() => {
    getImageId(query.id);
  }, [query.id]);
  const down = (size, id) => {};
  return (
    <div>
      <Head>
        <title>Download</title>
      </Head>
      {image.map(({ urls, id, width, height, links }) => {
        const { full, raw } = urls;
        return (
          <>
            <CardMainGlobal
              key={id}
              image={raw}
              id_image={id}
              w={width}
              h={height}
            />
            {/* <a href={links.download} download={id}>
              descargar
            </a>
            <button onClick={down(links.download)}>Descargar</button> */}
            <ImageDownloader imageUrl={full} imageTitle={id}>
              Descargar imagen
            </ImageDownloader>
          </>
        );
      })}
    </div>
  );
};

export default IdPhoto;
