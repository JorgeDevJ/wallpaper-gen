import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import UserLayaut from "../layaut/UserLayaut";
import Image from "next/image";
import { getSearchUser } from "../../services/apiconfig/indexApi";
import UserInfo from "../../components/UserInfo";
const User = () => {
  const [user, setUser] = useState([]);
  const router = useRouter();
  const { query } = router;
  const userName = query.user;
  const getUser = async (user) => {
    /* const newName = user.replace(/ /g, ""); */
    try {
      const { data } = await getSearchUser({
        params: {
          username: user,
        },
      });
      const response = data.data;
      setUser([response]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser(userName);
  }, [userName]);
  return (
    <UserLayaut>
      {console.log(user)}
      {user.map(
        ({
          username,
          name,
          profile_image,
          id,
          location,
          bio,
          total_collections,
          total_likes,
          total_photos,
        }) => {
          return (
            <UserInfo
              key={id}
              name={name}
              userName={username}
              profile={profile_image.large}
              bio={bio}
              location={location}
              photos={total_photos}
              likes={total_likes}
              collections={total_collections}
            />
          );
        }
      )}
    </UserLayaut>
  );
};

export default User;
