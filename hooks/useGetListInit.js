import { useState, useEffect, useCallback } from "react";
import { getDataImage } from "../services/apiconfig/indexApi";
import useLocalStorage from "use-local-storage";
const useGetListInit = () => {
  const [data, setData] = useState([]);
  const [pageId, setPageid] = useLocalStorage("page", 1);

  const [loader, setLoader] = useState(false);
  const getTopImage = useCallback(async (pageId) => {
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
  }, []);
  useEffect(() => {
    getTopImage(pageId);
  }, [pageId, getTopImage]);
  return [data, pageId, setPageid, loader];
};

export default useGetListInit;
