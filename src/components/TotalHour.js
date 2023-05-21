import { Box, Stack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const TotalHour = ({ totalFinal }) => {
  const { colorMode } = useColorMode();
  return (
    <Stack>
      <Box
        display="flex"
        flexDirection="column"
        padding={6}
        gap={4}
        bgColor={"transparent"}
        borderRadius="6px"
     
      >
        <Text
          fontSize="32px"
          fontWeight={600}
          textAlign="center"
          fontFamily={"Poppins"}
          color="#11999E"
        >
          Total
        </Text>
        <Text
          fontSize="48px"
          fontFamily={"Poppins"}
          textAlign="center"
          fontWeight={600}
          color={colorMode == "dark" ? "#fff" : "#212121"}
        >
          {" "}
          ${totalFinal}
        </Text>
      </Box>
    </Stack>
  );
};

export default TotalHour;
