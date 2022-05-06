import React from "react";
import styled from "styled-components";
import Image from "next/image";
import GridImages from "./GridImages";
import Card from "./Card";

const ContainerData = styled.main`
  margin: 2rem;
`;
const UserInfoMain = styled.div`
  display: flex;

  align-items: center;
`;
const Profile = styled.div`
  .image_card {
    border-radius: 100px;
    border: 3px solid black !important;
  }
`;
const UserSocialInfo = styled.div`
  display: flex;
`;
const InfoData = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  &:nth-child(1n + 1) {
    margin: 0 0 0 20px;
  }
`;
const Data = styled.p`
  margin: 0;
  font-weight: 800;
`;
const DataInfoDown = styled.span``;
const SectionInfoUser = styled.section`
  margin: 20px 0;
`;
const Name = styled.h1`
  margin: 0;
`;
const Location = styled.span``;
const Bio = styled.p``;
const UserInfo = ({
  profile,
  name,
  userName,
  bio,
  links,
  location,
  id,
  photos,
  likes,
  collections,
}) => {
  return (
    <ContainerData>
      <UserInfoMain>
        <Profile>
          <Image
            className="image_card"
            src={profile}
            alt={id}
            width={100}
            height={100}
            quality="90"
            priority
            placeholder="blur"
            blurDataURL
          />
        </Profile>
        <UserSocialInfo>
          <InfoData>
            <Data>{photos}</Data>
            <DataInfoDown>Photos</DataInfoDown>
          </InfoData>
          <InfoData>
            <Data>{likes} </Data>
            <DataInfoDown>Likes</DataInfoDown>
          </InfoData>
          <InfoData>
            <Data>{collections} </Data>
            <DataInfoDown>Collections</DataInfoDown>
          </InfoData>
        </UserSocialInfo>
      </UserInfoMain>
      <SectionInfoUser>
        <Name>{name}</Name>
        <Location>{location}</Location>
        <Bio>{bio}</Bio>
      </SectionInfoUser>
    </ContainerData>
  );
};

export default UserInfo;
