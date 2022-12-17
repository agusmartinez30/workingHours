import { Box, Stack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const TotalHour = ({totalFinal}) => {
  const { colorMode } = useColorMode();
  return (
    <Stack >
    <Box
      display="flex"
      flexDirection="column"
      padding={6}
      gap={4}
      bgColor={colorMode == "dark" ? "#152A38" : "#ffffff"}
      borderRadius="6px"
      boxShadow='sm'
    >
      <Text fontSize="32px" textAlign="center" color="#11999E">
        Total
      </Text>
      <Text fontSize="36px" textAlign="center"  color={colorMode == "dark" ? "#fff" : "#212121"}>
        {" "}
        ${totalFinal}
      </Text>
    </Box>
  </Stack>
  )
}

export default TotalHour