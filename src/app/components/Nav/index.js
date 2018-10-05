import React from "react";
import NameBadge from "app/components/NameBadge";
import UserInfo from "app/components/UserInfo";

const Nav = () => (
  <UserInfo.Consumer>
    {userInfo => <NameBadge>{userInfo.preferredName}</NameBadge>}
  </UserInfo.Consumer>
);

export default Nav;
