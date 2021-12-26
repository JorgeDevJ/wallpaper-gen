import { useRouter } from "next/router";
import Card from "../components/Card";
import GridImages from "../components/GridImages";
import useGetImage from "../hooks/useGetImage";
import HomeIndex from "./layaut/HomeIndex";
import ListPages from "../components/ListPages";
const Search = () => {
  const router = useRouter();
  const { q, page } = router.query;
  const [images, pageValue] = useGetImage(q, page);
  const nextPage = () => {
    const number = parseInt(page);
    router.push(`/search?q=${q}&page=${number + 1}`, undefined, {
      shallow: true,
    });
  };
  const prevPage = () => {
    const number = parseInt(page);
    console.log(number);
    router.push(`/search?q=${q}&page=${number - 1}`, undefined, {
      shallow: true,
    });
  };
  return (
    <HomeIndex>
      <ListPages
        next={nextPage}
        prev={prevPage}
        pageInit={page}
        pageFinish={pageValue}
      />

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
