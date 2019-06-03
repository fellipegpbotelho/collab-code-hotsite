import React, { Fragment } from "react";

import Home from "./pages/Home";

import Base from "./styles/base";
import Reset from "./styles/generic/reset";
import Colors from "./styles/settings/colors";
import Spacing from "./styles/settings/spacing";

export default function App() {
  return (
    <Fragment>
      <Home />
      <Base />
      <Reset />
      <Colors />
      <Spacing />
    </Fragment>
  );
}
