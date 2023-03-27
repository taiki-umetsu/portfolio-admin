import React from "react";
import { Toolbar, SaveButton } from "react-admin";

const CustomToolbar = (props: any) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export default CustomToolbar;
