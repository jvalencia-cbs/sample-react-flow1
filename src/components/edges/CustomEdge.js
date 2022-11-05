import React from "react";
import { getBezierPath, getMarkerEnd, path } from "react-flow-renderer";

export function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  arrowHeadType,
  markerEndId
}) {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  });
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
  return (
    <>
      <path
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          // stroke: "lime"
          stroke: "url(#gradient)"
        }}
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
    </>
  );
}
