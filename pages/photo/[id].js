import loadable from "@loadable/component";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getData } from "../../services/apiconfig/indexApi";
const DownloadItems = loadable(() => import("../../components/DownloadItems"));
const ScreenComponent = loadable(() =>
  import("../../components/ScreenComponent")
);
const ImageDownLayaut = loadable(() => import("../layaut/ImageDownLayaut"));
const IdPhoto = () => {
  const router = useRouter();
  const { query } = router;
  const [image, setImage] = useState([]);
  const [loader, setLoader] = useState(false);
  const getImageId = async (idP) => {
    try {
      setLoader(true);
      const { data } = await getData.get(`/photos/${idP}`);
      const response = data;
      setImage([response]);
      setLoader(false);
    } catch (error) {}
  };
  useEffect(() => {
    getImageId(query.id);
  }, [query.id]);
  return (
    <ImageDownLayaut>
      {loader ? (
        <ScreenComponent />
      ) : (
        <>
          {image.map(({ urls, id, width, height, user }) => {
            const { full, raw, regular } = urls;
            return (
              <>
                <DownloadItems
                  key={user}
                  image={regular}
                  id_image={id}
                  w={width}
                  h={height}
                  image_download={full}
                  user={user.username}
                />
              </>
            );
          })}
        </>
      )}
    </ImageDownLayaut>
  );
};

export default IdPhoto;
