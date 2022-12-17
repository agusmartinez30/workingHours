import { Box, Select, Text, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import HourWorking from "./HourWorking";

const ListHourWorking = ({ setTotal }) => {
  const { colorMode } = useColorMode();

  let horasLocalStorage = localStorage.getItem("prueba");

  const [monday, setMonday] = useState(0);
  // || JSON.parse(horasLocalStorage)[0].dia

  const [tuesday, setTuesday] = useState(0);
  // || JSON.parse(horasLocalStorage)[1].dia

  const [wednesday, setWednesday] = useState(0);
  // || JSON.parse(horasLocalStorage)[2].dia
  //

  const [thursday, setThursday] = useState(0);
  // || JSON.parse(horasLocalStorage)[3].dia
  //

  const [friday, setFriday] = useState(0);
  //|| JSON.parse(horasLocalStorage)[4].dia

  const [saturday, setSaturday] = useState(0);
  //|| JSON.parse(horasLocalStorage)[5].dia

  const [sunday, setSunday] = useState(0);
  // || JSON.parse(horasLocalStorage)[6].dia

  setTotal(
    monday + tuesday + wednesday + thursday + friday + saturday + sunday
  );

  let dias = [
    { dia: monday },
    { dia: tuesday },
    { dia: wednesday },
    { dia: thursday },
    { dia: friday },
    { dia: saturday },
    { dia: sunday },
  ];

  localStorage.setItem("prueba", JSON.stringify(dias));

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      padding={6}
      gap={4}
      bgColor={colorMode == "dark" ? "#152A38" : "#ffffff"}
      borderRadius="6px"
      boxShadow="sm"
    >
      <Box display="flex" justifyContent="space-between">
        <Text fontSize="24px" color="#11999E">
          Día
        </Text>
        <Text fontSize="24px" color="#11999E">
          Hora
        </Text>
      </Box>

      <Box display="flex" flexDirection="column" gap={4}>
        <HourWorking title="lunes" seter={setMonday} hour={monday} />
        <HourWorking title="martes" seter={setTuesday} hour={tuesday} />
        <HourWorking title="miercoles" seter={setWednesday} hour={wednesday} />
        <HourWorking title="jueves" seter={setThursday} hour={thursday} />
        <HourWorking title="viernes" seter={setFriday} hour={friday} />
        <HourWorking title="sabado" seter={setSaturday} hour={saturday} />
        <HourWorking title="domingo" seter={setSunday} hour={sunday} />
      </Box>
    </Box>
  );
};

export default ListHourWorking;
