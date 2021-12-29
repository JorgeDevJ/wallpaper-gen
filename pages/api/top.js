// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const getList = async (req, res) => {
  const {
    query: { page },
  } = req;
  const URL = `https://api.unsplash.com/photos?page=${page}&per_page=30`;
  const response = await axios.get(URL, {
    params: {
      client_id: process.env.KEY_UNSPLASH,
    },
  });
  res.status(200).json({ data: response.data });
};
export default getList;
