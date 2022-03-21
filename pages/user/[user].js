import { useState, useEffect } from "react";
import loadable from "@loadable/component";
import { useRouter } from "next/router";
const UserLayaut = loadable(() => import("../layaut/UserLayaut"));
const ScreenComponent = loadable(() =>
  import("../../components/ScreenComponent")
);
const UserInfo = loadable(() => import("../../components/UserInfo"));
import { getData } from "../../services/apiconfig/indexApi";
const User = () => {
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const { query } = router;
  const userName = query.user;
  const getUser = async (user) => {
    try {
      setLoader(true);
      const { data } = await getData.get(`/users/${user}`);
      const response = data;
      setUser([response]);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser(userName);
  }, [userName]);
  return (
    <UserLayaut>
      {loader ? (
        <ScreenComponent />
      ) : (
        user.map(
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
        )
      )}
    </UserLayaut>
  );
};

export default User;
