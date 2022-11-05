import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import { x } from "@xstyled/styled-components";

function CustomInputNode({ data, isConnectable, sourcePosition = "top" }) {
  return (
    <x.div bg="red">
      {data.label}
      <Handle
        type="source"
        position={sourcePosition}
        isConnectable={isConnectable}
      />
    </x.div>
  );
}

CustomInputNode.displayName = "CustomInputNode";

export default memo(CustomInputNode);
