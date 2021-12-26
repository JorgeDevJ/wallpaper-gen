import { useState, useEffect } from "react";
import { getDataImage } from "../services/apiconfig/indexApi";
const useGetListInit = () => {
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
  return [data];
};

export default useGetListInit;
