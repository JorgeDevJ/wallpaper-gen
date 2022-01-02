import { getData } from "../services/apiconfig/indexApi";
import { useState, useEffect, useCallback } from "react";
const useGetImage = (q, page) => {
  const [images, setImages] = useState([]);
  const [pageValue, setPageValue] = useState(1);
  const [loader, setLoader] = useState(false);

  const getImage = useCallback(async (value, pageIndex) => {
    try {
      setLoader(true);
      const { data } = await getData.get("/search/photos", {
        params: {
          query: value,
          page: pageIndex,
        },
      });
      const response = data.results;
      const p = data.total_pages;
      setImages(response);
      if (response.length !== 0) {
        setLoader(false);
      } else {
        setLoader(true);
      }
      setPageValue(p);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    getImage(q, page);
  }, [page, q, getImage]);
  return [images, pageValue, loader];
};

export default useGetImage;
