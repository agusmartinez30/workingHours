import { Text, Stack, Select, Box, Input } from "@chakra-ui/react";
import { useState } from "react";

const HourWorking = ({ title, seter }) => {
  const validateHours = (evt, update) => {
    // console.log(typeof  evt.target.value);

    if (evt.target.value.length == 0) {
      console.log("Is zero");
      update(0);
    } else {
      let hourDay = parseFloat(evt.target.value);
      console.log(  hourDay);
      console.log(typeof  hourDay);
      update(hourDay);
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" gap={4}>
      <Text fontSize="20px" textTransform="capitalize" color="#fff">
        {title}
      </Text>
      {/* <Input
        width="50px"
        placeholder="small size"
        size="sm"
        type="number"
        onKeyUp={(e) => validateHours(e, seter)}
        fontSize="20px"
        textAlign="center"
        color="#11999E"
      /> */}
      <Select
        width="120px"
        placeholder="0"
        color="#11999E"
        fontSize="20px"
        onChange={(e) => validateHours(e, seter)}
      >
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
