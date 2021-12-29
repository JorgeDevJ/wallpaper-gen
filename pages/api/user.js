import axios from "axios";

const User = async (req, res) => {
  const {
    query: { page, username },
  } = req;
  const URL = `https://api.unsplash.com/users/${username}`;
  const response = await axios.get(URL, {
    params: {
      client_id: process.env.KEY_UNSPLASH,
    },
  });
  res.status(200).json({ data: response.data });
};
export default User;
