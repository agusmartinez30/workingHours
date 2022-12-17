import {
  Text,
  Stack,
  Select,
  Box,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useHour from "../hooks/useHour";

const HourWorking = ({ title, seter, hour }) => {
  const { colorMode } = useColorMode();
  const validateHours = (evt, update) => {
    if (evt.target.value.length == 0) {
      console.log("Is zero");
      update(0);
    } else {
      let hourDay = parseFloat(evt.target.value);
      update(hourDay);
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" gap={4}>
      <Text
        fontSize="20px"
        textTransform="capitalize"
        color={colorMode == "dark" ? "#E8E8E8" : "#323643"}
      >
        {title}
      </Text>
      <Select
        width="120px"
        placeholder="hour"
        color={colorMode == "dark" ? "#11999E" : "#323643"}
        fontSize="20px"
        onChange={(e) => validateHours(e, seter)}
      >
        {hour && (
          <option value={hour} selected>
            {hour}
          </option>
        )}

        <option value="0">0</option>
        <option value="0.5">0.5</option>
        <option value="1">1</option>
        <option value="1.5">1.5</option>
        <option value="2">2</option>
        <option value="2.5">2.5</option>
        <option value="3">3</option>
        <option value="3.5">3.5</option>
        <option value="4">4</option>
        <option value="4.5">4.5</option>
        <option value="5">5</option>
      </Select>
    </Box>
  );
};

export default HourWorking;
