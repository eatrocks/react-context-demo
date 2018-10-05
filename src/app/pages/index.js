import React from "react";
import Layout from "app/components/Layout";
import Header from "app/components/Header";
import Content from "app/components/Content";
import Footer from "app/components/Footer";

import UserInfoContext, { getUserInfo } from "app/components/UserInfo";

const Home = () => (
  <UserInfoContext.Provider value={getUserInfo()}>
    <Layout title="Home">
      <Header />
      <Content />
      <Footer />
    </Layout>
  </UserInfoContext.Provider>
);

export default Home;
