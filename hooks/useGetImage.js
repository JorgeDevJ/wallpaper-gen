import React from "react";
import { getDataImage } from "../services/apiconfig/indexApi";
import { useState, useEffect } from "react";
const useGetImage = (q, page) => {
  const [images, setImages] = useState([]);
  const [pageValue, setPageValue] = useState(1);
  const getTopImage = async (value, pageIndex) => {
    try {
      const { data } = await getDataImage.get("search/photos", {
        params: {
          query: value,
          page: pageIndex,
        },
      });
      const response = data.results;
      const p = data.total_pages;
      setImages(response);
      setPageValue(p);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopImage(q, page);
  }, [q, page]);
  return [images, pageValue];
};

export default useGetImage;
