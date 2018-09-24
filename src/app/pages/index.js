import React from "react";
import styled from "styled-components";
import Layout from "app/components/Layout";
import { H1 } from "@lds/eden-headings";
import Link from "next/link";
import Image from "@lds/eden-image";
import { Grid, Column } from "@lds/eden-material-grid";
import Button from "@lds/eden-buttons/Primary";
import Stack from "@lds/eden-stack";
import { get } from "@lds/universal-env";
import { spacing16, spacing32 } from "@lds/eden-style-constants";
import { mediaBreakGutter, mediaBreak840w } from "@lds/eden-styled-helpers";

const { APP_NAME, VARIABLE1 } = get();

const Header = styled.header`
  padding: ${spacing32} ${spacing16};

  ${mediaBreakGutter`
    padding: ${spacing32} 1.5rem;
  `};

  ${mediaBreak840w`
    padding: ${spacing32} 20%;
  `};
`;

const Body = styled.div`
  padding: 0 ${spacing16};
  ${mediaBreakGutter`
    padding: 0 1.5rem;
  `};

  ${mediaBreak840w`
    padding: 0 20%;
  `};
`;

const ImageCell = ({ src, alt = "placeholder" }) => (
  <Column span4="4" span8="4" span12="4">
    <Image src={src} alt={alt} />
  </Column>
);

/**
 * Because it is in the pages folder, this component
 * will automatically be associated with a route.
 * When the "/" route is visited, the *default* export
 * for this file will be served to the client.
 * Source: https://github.com/zeit/next.js/#setup
 */
const Home = () => (
  <Layout strings={{}} title="Home">
    <Header>
      <H1>Welcome Human to {APP_NAME}</H1>
    </Header>

    <Body>
      <Stack gapSize="32">
        <Grid>
          {/* To serve static files, put them in the "src/app/static" folder,
             then reference them anywhere in your project's file tree with the
             simple "/static/myfile" pattern.
             Source: https://github.com/zeit/next.js/#static-file-serving-eg-images */}
          <ImageCell src="/static/temple1.jpg" alt="placeholder" />
          <ImageCell src="/static/temple2.jpg" alt="placeholder" />
          <ImageCell src="/static/temple3.jpg" alt="placeholder" />
        </Grid>
        <div>
          {/* In Next.js, use the <Link/> component for client-side routing.
              Vanity URLs are created using the `as` prop. Note: To support server-side
              calls to vanity URLs, custom route handlers will need to be added
              to "../../server/index.js". */}
          <Link href="/greeting?id=world" as="/hello/world" passHref prefetch>
            <a href="/greeting?id=world">
              <Button>Hello World</Button>
            </a>
          </Link>
        </div>

        <pre>VARIABLE1: {VARIABLE1}</pre>
      </Stack>
    </Body>
  </Layout>
);

export default Home;
