import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getIdPhoto } from "../../services/apiconfig/indexApi";
import CardMainGlobal from "../../components/CardMainGlobal";
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
  return (
    <div>
      {image.map(({ urls, id, width, height }) => {
        const { full, raw } = urls;
        return (
          <CardMainGlobal
            key={id}
            image={full}
            id_image={id}
            w={width}
            h={height}
          />
        );
      })}
    </div>
  );
};

export default IdPhoto;
