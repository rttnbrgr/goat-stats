import React from "react";
import { GlobalStyles } from "twin.macro";
import tw, { styled } from "twin.macro";

const AppWrapper = styled.div(() => [
  `
  max-width: 500px;
  margin: 0 auto;
`,
]);

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <AppWrapper>{children}</AppWrapper>
  </>
);

export default Layout;
