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

export const Hours = [
  {
    value: 0,
    name: "0"
  },
  {
    value: 0.5,
    name: "0,5"
  },
  {
    value: 1,
    name: "1"
  },
  {
    value: 1.5,
    name: "1,5"
  }
]

export const HOURS = () => {
  let acc = 0
  let count = 24
  const arrHours = []

  for (let i = 0; i <= count; i++) {

    if (i <= count) {

      if (acc === 0) {

        const objHour = {
          value: acc,
          name: acc.toString()
        }

        arrHours.push(objHour)

        acc = acc + 0.5
      } else {
        const objHour = {
          value: acc,
          name: acc.toString()
        }
        arrHours.push(objHour)
        acc = acc + 0.5
      }
    }
  }

  return arrHours
}

const HourWorking = ({ id, title, hour, days, setDays }) => {



  const hours = HOURS()

  const { colorMode } = useColorMode();
  const validateHours = (evt) => {


    const padreHora = evt.target
    const papa = padreHora.parentNode.parentNode
    const DayId = papa.children[0].id


    if (evt.target.value.length === 0) {

    } else {
      let hourDay = parseFloat(evt.target.value);
      console.log(typeof DayId);
      const obj = days.find((item) => item.id === parseInt(DayId))
      obj.value = hourDay

      const newData = days.map(item => {
        if (item.id === obj.id) {
          return obj;
        }
        return item;
      });

      setDays(newData)


    }
  };

  return (
    <Box display="flex" justifyContent="space-between" gap={4}>
      <Text
        fontSize="20px"
        textTransform="capitalize"
        fontFamily={'Poppins'}
        fontWeight={600}
        color={colorMode == "dark" ? "#E8E8E8" : "#323643"}
        id={id}
      >
        {title}
      </Text>
      <Select
        width="120px"
        placeholder="hora/s"
        color={colorMode == "dark" ? "#fff" : "#323643"}
        fontSize="20px"
        onChange={(e) => validateHours(e)}
      >
        {hour && (
          <option id="hijo" value={hour} selected>
            {hour}
          </option>
        )}

        {
          hours.map((hr) => (
            <option id="hijo" value={hr.value}>{hr.name}</option>
          ))
        }
      </Select>
    </Box>
  );
};



export default HourWorking;
