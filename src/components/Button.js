import React from "react";
import { x } from "@xstyled/styled-components";
import { Frame } from "framer";
import { useTheme } from "styled-components";

export function Button(props) {
  return (
    <x.button
      borderRadius={8}
      bg="primary"
      color="white"
      fontWeight="bold"
      w="full"
      py={3}
      px={4}
      boxShadow="lg"
      hoverBg="primaryHover"
      focusRing={1}
      focusRingColor="primary"
      transition="all 0.2s ease"
      {...props}
    />
  );
}

export function FancyButton(props) {
  const theme = useTheme();

  return (
    <Frame
      whileHover={{ scale: 0.75 }}
      size={150}
      radius={30}
      background={theme.colors.primary}
      style={{
        display: "grid",
        cursor: "pointer",
        placeItems: "center"
      }}
    >
      <x.button color="white" bg={"transparent"} fontWeight="bold" {...props} />
    </Frame>
  );
}
