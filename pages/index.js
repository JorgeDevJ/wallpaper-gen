import Head from "next/head";
import Card from "../components/Card";
import useGetListInit from "../hooks/useGetListInit";
import HomeIndex from "./layaut/HomeIndex";
import GridImages from "../components/GridImages";

export default function Home() {
  const [data] = useGetListInit();

  return (
    <HomeIndex>
      <Head>
        <title>Home</title>
      </Head>
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
