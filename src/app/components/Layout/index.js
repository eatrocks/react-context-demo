import React from "react";
import styled from "styled-components";
import Root from "@lds/eden-root";
import PageWrapper from "@lds/eden-page-wrapper";
import Head from "next/head";

const FullHeight = styled.div`
  min-height: 100vh;
`;

const Layout = ({
  strings = {},
  theme = {},
  title = "The Church of Jesus Christ of Latter-day Saints",
  children
}) => (
  <Root strings={strings} theme={theme}>
    <PageWrapper>
      <Head>
        <title>{title}</title>
      </Head>
      <FullHeight>{children}</FullHeight>
    </PageWrapper>
  </Root>
);

export default Layout;
