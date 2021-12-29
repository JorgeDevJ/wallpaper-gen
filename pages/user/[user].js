import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import UserLayaut from "../layaut/UserLayaut";
import ScreenComponent from "../../components/ScreenComponent";
import { getSearchUser } from "../../services/apiconfig/indexApi";
import UserInfo from "../../components/UserInfo";
import GridImages from "../../components/GridImages";
import CardMainGlobal from "../../components/CardMainGlobal";
const User = () => {
  const [user, setUser] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const { query } = router;
  const userName = query.user;
  const getUser = async (user) => {
    /* const newName = user.replace(/ /g, ""); */
    try {
      setLoader(true);
      const { data } = await getSearchUser({
        params: {
          username: user,
        },
      });
      const response = data.data;
      setUser([response]);
      setPhotos(response.photos);
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
      <GridImages>
        {photos.map(({ id, urls, updated_at }) => {
          /* const { id, blur_hash } = photos[0]; */
          console.log(id);
          return (
            <CardMainGlobal
              key={id}
              image={urls.raw}
              title={updated_at}
              w={100}
              h={100}
            />
          );
        })}
      </GridImages>
      {/* {user.map(
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
      )} */}
    </UserLayaut>
  );
};

export default User;
