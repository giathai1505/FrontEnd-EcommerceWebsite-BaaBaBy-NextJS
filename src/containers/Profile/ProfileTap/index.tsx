import React from "react";
import {
  Avatar,
  AvatarWrap,
  EditProfileText,
  Email,
  InfomationContent,
  InfomationWrap,
  Name,
} from "./styles";

const ProfileTap = () => {
  return (
    <InfomationWrap>
      <InfomationContent>
        <AvatarWrap>
          <Avatar
            src="https://1.bp.blogspot.com/-Vw30ZajH6Ow/X7EArE3z2jI/AAAAAAAAk_4/VPcABJelXkkTibD2i3W0afsaPvlEiulGACNcBGAsYHQ/s0/taoanhdep-hinh-nen-among-us.jpg"
            alt=""
          />
          <EditProfileText>Edit Profile</EditProfileText>
        </AvatarWrap>
        <div>
          <Name>Gia Thái</Name>
          <Email>giathai1505@gmail.com</Email>
        </div>
      </InfomationContent>
    </InfomationWrap>
  );
};

export default ProfileTap;
