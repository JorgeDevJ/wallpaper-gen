import Head from "next/head";
import Card from "../components/Card";
import useGetListInit from "../hooks/useGetListInit";
import HomeIndex from "./layaut/HomeIndex";
import GridImages from "../components/GridImages";
import ListPages from "../components/ListPages";
import ScreenComponent from "../components/ScreenComponent";

export default function Home() {
  const [data, pageId, setPageid, loader] = useGetListInit();
  const nextPage = () => {
    setPageid(pageId + 1);
  };
  const prevPage = () => {
    setPageid(pageId - 1);
  };

  return (
    <HomeIndex>
      <Head>
        <title>Home</title>
      </Head>

      {loader ? (
        <ScreenComponent />
      ) : (
        <>
          <ListPages next={nextPage} prev={prevPage} pageInit={pageId} />

          <GridImages>
            {data.map(
              ({
                id,
                urls,
                alt_description,
                width,
                height,
                user,
                blur_hash,
              }) => {
                const { regular, small, raw } = urls;
                return (
                  <Card
                    key={id}
                    image={regular}
                    title={alt_description}
                    id_image={id}
                    w={width}
                    h={height}
                    user={user.name}
                    user_image={user.profile_image.medium}
                    user_name={user.username}
                    id_user={user.id}
                    blur={blur_hash}
                  />
                );
              }
            )}
          </GridImages>
        </>
      )}
    </HomeIndex>
  );
}
