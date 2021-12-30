import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getIdPhoto } from "../../services/apiconfig/indexApi";
import Head from "next/head";
import CardMainGlobal from "../../components/CardMainGlobal";
import fileDownloader from 'js-file-download'
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
  const down = (size, id) => {
    /* new JsFileDownloader({
      url: size
    })
      .then(function () {
        console.log("descarga completa");
      })
      .catch(function (error) {
        console.log(error);
      }); */
      fileDownloader(size, `${id}.jpg`)
  };
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
              image={full}
              id_image={id}
              w={width}
              h={height}
            />
            <a href={links.download} download={id}>
              descargar
            </a>
            <button onClick={down(links.download)}>Descargar</button>
          </>
        );
      })}
    </div>
  );
};

export default IdPhoto;
