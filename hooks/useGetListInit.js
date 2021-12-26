import { useState, useEffect } from "react";
import { getDataImage } from "../services/apiconfig/indexApi";
const useGetListInit = () => {
  const [data, setData] = useState([]);
  const [pageId, setPageid] = useState(1);
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
    getTopImage(pageId);
  }, [pageId]);
  return [data, pageId, setPageid];
};

export default useGetListInit;
