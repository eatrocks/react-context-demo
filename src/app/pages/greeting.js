import React from "react";
import styled from "styled-components";
import Layout from "app/components/Layout";
import { H1 } from "@lds/eden-headings";
import Link from "next/link";
import HelloWorld from "app/components/HelloWorld";

const Name = styled.em`
  color: rebeccapurple;
  font-weight: bold;
  text-transform: uppercase;
`;

class Greeting extends React.Component {
  /**
   * This is Next.js's standard API to fetch data for pages:
   * A function called getInitialProps, which can be async.
   * It will be executed on the server or client, depending on
   * which scenario is most optimal. To support fetching on
   * the server, an isomorphic version of `fetch` can be used:
   *    import fetch from "isomorphic-unfetch";
   * The returned object of the getInitialProps function will
   * be used as the component's initial props.
   * Source: https://github.com/zeit/next.js/#fetching-data-and-component-lifecycle
   */
  static getInitialProps = ({ query: { id: name } = {} }) => {
    return { name };
  };

  render() {
    const { name } = this.props;
    return (
      <Layout title={`Hello ${name}`}>
        <H1>
          hello there <Name>{name}</Name>
        </H1>

        <HelloWorld>hello</HelloWorld>

        <Link href="/" passHref prefetch>
          <a href="/">Navigate home</a>
        </Link>
      </Layout>
    );
  }
}

export default Greeting;
