import React from "react";

export const getUserInfo = () => ({ preferredName: "Bruce", id: 0 });

const defaultUserInfo = { preferredName: "World", id: 0 };

const UserInfoContext = React.createContext(defaultUserInfo);

export default UserInfoContext;
