import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

export const decorators = [
  (Story) => {
    return (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    );
  },
];