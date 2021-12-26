import React from "react";

import { useRouter } from "next/router";
import HomeIndex from "../../layaut/HomeIndex";
const Query = () => {
  const router = useRouter();
  const { query } = router.query;
  console.log(query);
  return (
    <HomeIndex>
      <h1>{query}</h1>
    </HomeIndex>
  );
};

export default Query;
