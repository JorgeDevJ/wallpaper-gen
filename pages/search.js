import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../components/Card";
import GridImages from "../components/GridImages";
import { getDataImage } from "../services/apiconfig/indexApi";
import useGetImage from "../hooks/useGetImage";
import HomeIndex from "./layaut/HomeIndex";
import ListPages from "../components/ListPages";
const Search = () => {
  const router = useRouter();
  const { q, page } = router.query;
  const [images, pageValue] = useGetImage(q, page);
  return (
    <HomeIndex>
      <ListPages>
        <div
          style={{
            margin: "0 1rem",
          }}
        >
          <span>{page}</span> of <span>{pageValue}</span>
        </div>
      </ListPages>
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
    </HomeIndex>
  );
};

export default Search;
