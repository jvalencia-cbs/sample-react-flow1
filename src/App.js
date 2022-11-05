import React from "react";
import { Themed } from "./theme";

import { x } from "@xstyled/styled-components";
import Text from "./components/Text";
import { OverviewFlow } from "./components/workflow/OverviewFlow";

export default function App() {
  return (
    <Themed>
      <x.div px={8} py={8} display="flex" flexDirection="column" h={"100%"}>
        <Text.Title>Workflow Editor</Text.Title>
        <x.div w="full" flex={1}>
          <OverviewFlow />
        </x.div>
      </x.div>
    </Themed>
  );
}
