import React, { Fragment } from "react";

import Home from "./pages/Home";

import Base from "./styles/base";
import Size from "./styles/settings/size";
import Reset from "./styles/generic/reset";
import Colors from "./styles/settings/colors";
import Spacing from "./styles/settings/spacing";

export default function App() {
  return (
    <Fragment>
      <Home />
      <Base />
      <Size />
      <Reset />
      <Colors />
      <Spacing />
    </Fragment>
  );
}
