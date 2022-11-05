import React from "react";
import { x } from "@xstyled/styled-components";
import { Handle } from "react-flow-renderer";
import { useLayer, Arrow } from "react-laag";
import { motion } from "framer-motion";

export const AppNode = React.memo(
  ({ data, isDragging, selected: isSelected }) => {
    // const [isOver, hoverProps] = useHover();
    const [isFocused, setFocus] = React.useState(false);

    const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
      // isOpen: isOver
      isOpen: (isSelected && !isDragging) || isFocused
    });

    return (
      <x.div>
        <x.div
          hoverTransform="scale(1.1)"
          transition="transform 0.2s ease"
          bg="white"
          borderRadius="full"
          p={2}
          boxShadow="lg"
          zIndex={1}
          {...triggerProps}
          // {...hoverProps}
        >
          <x.img
            h={12}
            w={12}
            src={data.icon}
            alt={data.label}
            draggable={false}
          />
        </x.div>
        <x.div
          as={Handle}
          type="target"
          position="left"
          background="linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
          w={4}
          h={4}
          left={62}
          border={0}
          top={24}
          zIndex={-1}
          onConnect={(params) => console.log("handle onConnect", params)}
        />

        <x.div
          as={Handle}
          type="source"
          position="right"
          id="a"
          background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
          right={10}
          w={4}
          h={4}
          left={2}
          top={24}
          border={0}
          zIndex={-1}
        />

        {((isSelected && !isDragging) || isFocused) &&
          renderLayer(
            <Tooltip
              data={data}
              layerProps={layerProps}
              arrowProps={arrowProps}
              onFocus={() => {
                setFocus(true);
              }}
              onBlur={() => {
                setFocus(false);
              }}
            />
          )}
      </x.div>
    );
  }
);

function Tooltip({ layerProps, arrowProps, data, onFocus, onBlur }) {
  return (
    <motion.div
      animate={{ translateY: [0, -20], opacity: [0, 1] }}
      transition={{ duration: 0.3 }}
      style={{ zIndex: 100000000 }}
      onClick={() => {
        onFocus?.();
      }}
    >
      <x.div
        h={20}
        w={200}
        borderRadius={20}
        color="black"
        bg="white"
        boxShadow="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
        {...layerProps}
      >
        {data.label}
        <Arrow {...arrowProps} />
      </x.div>
    </motion.div>
  );
}
