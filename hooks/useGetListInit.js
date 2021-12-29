import { useState, useEffect } from "react";
import { getDataImage } from "../services/apiconfig/indexApi";
const useGetListInit = () => {
  const [data, setData] = useState([]);
  const [pageId, setPageid] = useState(1);
  const [loader, setLoader] = useState(false);
  const getTopImage = async (pageId) => {
    try {
      setLoader(true);
      const { data } = await getDataImage({
        params: {
          page: pageId,
        },
      });
      const response = data.data;
      setData(response);
      if (response.length !== 0) {
        setLoader(false);
      } else {
        setLoader(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopImage(pageId);
  }, [pageId]);
  return [data, pageId, setPageid, loader];
};

export default useGetListInit;
