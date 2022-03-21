import loadable from "@loadable/component";
import Head from "next/head";
const useGetListInit = loadable(() => improt("../hooks/useGetListInit"));
const HomeIndex = loadable(() => import("./layaut/HomeIndex"));
const GridImages = loadable(() => import("../components/GridImages"));
const ListPages = loadable(() => import("../components/ListPages"));
const Card = loadable(() => import("../components/Card"));
const ScreenComponent = loadable(() => import("../components/ScreenComponent"));
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
            {data.map(({ id, urls, alt_description, width, height, user }) => {
              const { regular, small, raw } = urls;
              return (
                <Card
                  key={id}
                  image={raw}
                  title={alt_description}
                  id_image={id}
                  w={width}
                  h={height}
                  user={user.name}
                  user_image={user.profile_image.medium}
                  user_name={user.username}
                  id_user={user.id}
                />
              );
            })}
          </GridImages>
        </>
      )}
    </HomeIndex>
  );
}
