import { useState, useEffect, useCallback } from "react";
import { getData } from "../services/apiconfig/indexApi";
import useLocalStorage from "use-local-storage";
const useGetListInit = () => {
  const [data, setData] = useState([]);
  const [pageId, setPageid] = useLocalStorage("page", 1);

  const [loader, setLoader] = useState(false);
  const getTopImage = useCallback(async (pageId) => {
    try {
      setLoader(true);
      const { data } = await getData.get("/photos", {
        params: {
          page: pageId,
          per_page: 20,
          order_by: "popular",
        },
      });
      const response = data;
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
