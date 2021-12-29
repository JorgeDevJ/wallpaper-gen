import { useRouter } from "next/router";
import Card from "../components/Card";
import GridImages from "../components/GridImages";
import useGetImage from "../hooks/useGetImage";
import HomeIndex from "./layaut/HomeIndex";
import ListPages from "../components/ListPages";
import ScreenComponent from "../components/ScreenComponent";
const Search = () => {
  const router = useRouter();
  const { q, page } = router.query;
  const [images, pageValue, loader] = useGetImage(q, page);
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
      {loader ? (
        <ScreenComponent />
      ) : (
        <>
          <ListPages
            next={nextPage}
            prev={prevPage}
            pageInit={page}
            pageFinish={pageValue}
          />
          <h1
            style={{
              margin: "10px 10px 5px 10px",
            }}
          >
            Results for: {q}
          </h1>
          {console.log(pageValue)}
          <GridImages>
            {images.map(
              ({ id, urls, alt_description, width, height, user }) => {
                const { regular } = urls;
                const { profile_image, name, username } = user;
                return (
                  <Card
                    key={id}
                    image={regular}
                    title={alt_description}
                    w={width}
                    h={height}
                    user={name}
                    user_name={user.username}
                    user_image={profile_image.medium}
                    id_user={user.id}
                  />
                );
              }
            )}
          </GridImages>
        </>
      )}
    </HomeIndex>
  );
};

export default Search;
