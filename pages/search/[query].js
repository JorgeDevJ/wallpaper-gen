import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../../components/Card";
import GridImages from "../../components/GridImages";
import { getDataImage } from "../../services/apiconfig/indexApi";
import HomeIndex from "../layaut/HomeIndex";
const Query = () => {
  const router = useRouter();
  const { query } = router.query;
  console.log(query);
  const [images, setImages] = useState([]);
  const getTopImage = async (value) => {
    try {
      const { data } = await getDataImage.get("search/photos", {
        params: {
          query: value,
        },
      });
      const response = data.results;
      setImages(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopImage(query);
  }, [query]);
  return (
    <HomeIndex>
      <GridImages>
        {images.map(({ id, urls, alt_description, width, height }) => {
          const { regular } = urls;
          return (
            <Card
              key={id}
              image={regular}
              title={alt_description}
              w={width}
              h={height}
            />
          );
        })}
      </GridImages>
      <h1>{query}</h1>
    </HomeIndex>
  );
};

export default Query;
