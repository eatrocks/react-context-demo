import React from "react";
import { mount } from "enzyme";
import Layout from ".";

test("has children", () => {
  const wrapper = mount(<Layout>Some children</Layout>);
  const text = wrapper.text();
  expect(text).toContain("Some children");
});
