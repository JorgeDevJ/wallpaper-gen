import Head from "next/head";
import Card from "../components/Card";
import useGetListInit from "../hooks/useGetListInit";
import HomeIndex from "./layaut/HomeIndex";
import GridImages from "../components/GridImages";
import ListPages from "../components/ListPages";
export default function Home() {
  const [data, pageId, setPageid] = useGetListInit();
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
      <ListPages
        next={nextPage}
        prev={prevPage}
        pageInit={pageId}
        pageFinish="?"
      />
      <GridImages>
        {data.map(({ id, urls, alt_description, width, height }) => {
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
}
