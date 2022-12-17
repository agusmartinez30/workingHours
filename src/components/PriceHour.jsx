import { Box, Input, Stack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const PriceHour = ({ total, setPrecio }) => {
  const { colorMode } = useColorMode();
  let precio = localStorage.getItem("precio");

  return (
    <Stack width={{ base: "100%", md: "100%" }} height="50%" gap={4}>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        padding={6}
        gap={4}
        bgColor={colorMode == "dark" ? "#152A38" : "#ffffff"}
        borderRadius="6px"
        boxShadow='sm'
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
   
        >
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="16px" color="#11999E">
              Total horas
            </Text>
            <Text fontSize="32px"   color={colorMode == "dark" ? "#fff" : "#323643"}>
              {total}
            </Text>
          </Box>
          <Text fontSize="32px"   color={colorMode == "dark" ? "#11999E" : "#323643"}>
            x
          </Text>

          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="16px"  color="#11999E">
              Precio/Hora
            </Text>

            <Input
              width="120px"
              fontSize="22px"
              textAlign="center"
              color="#11999E"
              placeholder="Ex. 200"
              padding="20px"
              size="sm"
              type="number"
              value={precio}
              onChange={(evt) => {
                if (evt.target.value.length == 0) {
                  console.log("Is zero");
                  setPrecio(0);
                } else {
                  let priceHourDay = parseInt(evt.target.value);
                  setPrecio(priceHourDay);
                }
              }}
            />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default PriceHour;
