import axios from "axios";

const GetPhotoId = async (req, res) => {
  const {
    query: { id },
  } = req;
  const URL = `https://api.unsplash.com/photos/${id}`;
  const response = await axios.get(URL, {
    params: {
      client_id: process.env.KEY_UNSPLASH,
    },
  });
  res.status(200).json({ data: response.data });
};
export default GetPhotoId;
