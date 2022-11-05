import React, { useState } from "react";
import ReactFlow, { removeElements, addEdge } from "react-flow-renderer";
import initialElements from "./initial-elements";

import { AppNode } from "../nodes/AppNode";
import { CustomInputNode } from "../nodes/CustomInputNode";
import { CustomEdge } from "../edges/CustomEdge";

const nodeTypes = {
  app: AppNode,
  input: CustomInputNode
};

const edgeTypes = {
  custom: CustomEdge
};

const onLoad = (reactFlowInstance) => {
  reactFlowInstance.fitView();
};

export function OverviewFlow() {
  const [elements, setElements] = useState(initialElements);

  const onElementsRemove = (elementsToRemove) => {
    setElements((els) => removeElements(elementsToRemove, els));
  };

  const onConnect = (params) => {
    setElements((els) =>
      addEdge(
        {
          ...params,
          type: "custom",
          animated: true
        },
        els
      )
    );
  };

  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      snapToGrid={true}
      snapGrid={[15, 15]}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      connectionLineComponent={edgeTypes.custom}
      elementsSelectable
    >
      <svg>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(253,29,29,1)" />
            <stop offset="100%" stopColor="rgba(131,58,180,1)" />
          </linearGradient>
        </defs>
      </svg>
    </ReactFlow>
  );
}
