import { Box, Select, Text, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import HourWorking from "./HourWorking";

const ListHourWorking = ({ setTotal }) => {
  const { colorMode } = useColorMode();

  // array de dias y valor
  const DAYS = [
    {
      id: 1,
      name: "Lunes",
      value: 0,
    },
    {
      id: 2,
      name: "Martes",
      value: 0,
    },
    {
      id: 3,
      name: "Miercoles",
      value: 0,
    },
    {
      id: 4,
      name: "Jueves",
      value: 0,
    },
    {
      id: 5,
      name: "Viernes",
      value: 0,
    },
    {
      id: 6,
      name: "Sabado",
      value: 0,
    },
    {
      id: 7,
      name: "Domingo",
      value: 0,
    },
  ];

  const [days, setDays] = useState(
    JSON.parse(localStorage.getItem("DIAS")) || DAYS
  );

  useEffect(() => {
    let count = 0;
    days.map((day) => (count = count + day.value));
    setTotal(count);
    console.log(days);
    localStorage.setItem("DIAS", JSON.stringify(days));
  }, [days]);

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      padding={6}
      gap={4}
      bgColor={"transparent"}
      borderRight={{"base": 0, "md": "1px solid #11999E"}}
      borderBottom={{"base": "1px solid #11999E", "md": 0 }}
    >
      <Box display="flex" justifyContent="space-between">
        <Text fontSize="24px" fontFamily={"Poppins"} color="#11999E">
          Día
        </Text>
        <Text fontSize="24px" fontFamily={"Poppins"} color="#11999E">
          Hora
        </Text>
      </Box>

      <Box display="flex" flexDirection="column" gap={4}>
        {days.map((day) => (
          <HourWorking
            id={day.id}
            days={days}
            title={day.name}
            setDays={setDays}
            hour={day.value}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ListHourWorking;
