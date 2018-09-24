import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import HelloWorld from ".";

storiesOf("HelloWorld", module).add("hello", () => (
  <HelloWorld onClick={action("clicked")}>hello</HelloWorld>
));
