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
        bgColor={"transparent"}      
        borderBottom={"1px solid #11999E"}
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
            <Text fontSize="22px" fontFamily={'Poppins'} color="#11999E">
              Total horas
            </Text>
            <Text fontSize="32px" color={colorMode == "dark" ? "#fff" : "#323643"}>
              {total}
            </Text>
          </Box>
          <Text fontSize="32px" color={colorMode == "dark" ? "#11999E" : "#323643"}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#11999E" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </Text>

          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={2}
          >
            <Text fontSize="18px" fontFamily={'Poppins'} color="#11999E">
            <span> Precio por</span>
             <br/>
             Hora 
            </Text>

            <Input
              width="120px"
              fontSize="22px"
              textAlign="center"
              color={colorMode == "dark" ? "#fff" : "#323643"}
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
