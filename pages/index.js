import Head from "next/head";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { getDataImage } from "../services/apiconfig/indexApi";
import HomeIndex from "./layaut/HomeIndex";
import styled from "styled-components";
import GridImages from "../components/GridImages";

export default function Home() {
  const [data, setData] = useState([]);
  const getTopImage = async (pageId) => {
    try {
      const { data } = await getDataImage.get("/photos", {
        params: {
          page: pageId,
        },
      });
      const response = data;
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopImage(1);
  }, []);
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
