import React, { lazy, useState } from "react";
import { ProfileTapHeader } from "./data";

import HistoryOrderTap from "./HistoryOrdersTap";
import ProfileTap from "./ProfileTap";
import {
  ProfileWrap,
  Tap,
  TapContent,
  TapHeader,
  TapHeaderItem,
} from "./styles";

const Tapcontent: any[] = [
  { component: HistoryOrderTap },
  { component: ProfileTap },
  { component: ProfileTap },
  { component: ProfileTap },
];

const ProfilePage = () => {
  if (typeof window === undefined) return;
  const [isActiveTap, setActiveTap] = useState<number>(0);
  const Component = Tapcontent[isActiveTap].component;

  return (
    <ProfileWrap>
      <Tap>
        <TapHeader>
          {ProfileTapHeader.map((item, index) => {
            return (
              <TapHeaderItem
                active={index === isActiveTap}
                onClick={e => setActiveTap(index)}
              >
                {item}
              </TapHeaderItem>
            );
          })}
        </TapHeader>
        <TapContent>
          <Component />
        </TapContent>
      </Tap>
    </ProfileWrap>
  );
};

export default ProfilePage;
