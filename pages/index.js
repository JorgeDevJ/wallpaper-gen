import Head from "next/head";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { getDataImage } from "../services/apiconfig/indexApi";
import HomeIndex from "../layaut/HomeIndex";
import styled from "styled-components";
const GridImages = styled.main`
  column-gap: 10px;
  -webkit-column-gap: 10px;
  -moz-column-gap: 10px;
  -webkit-column-width: 400px;
  -moz-column-width: 400px;
  column-width: 400px;
  counter-reset: item;
  list-style: none;
  margin: 0 auto;
  padding: 20px 10px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;
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
  useEffect(() => {}, []);
  return (
    <HomeIndex>
      <Head>
        <title>Home</title>
      </Head>
      {/* <GridImages>
        {data.map(({ id, urls, alt_description, width, height }) => {
          const { raw } = urls;
          return (
            <Card
              key={id}
              image={raw}
              title={alt_description}
              w={width}
              h={height}
            />
          );
        })}
      </GridImages> */}
    </HomeIndex>
  );
}
