import React from "react";
import { x } from "@xstyled/styled-components";

export default {
  Title
};

function Title(props) {
  return <x.h2 mb={4} fontWeight="bold" fontSize="lg" {...props} />;
}
