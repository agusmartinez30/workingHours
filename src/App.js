import { MoonIcon, PhoneIcon, SunIcon } from "@chakra-ui/icons";
import {
  Text,
  Stack,
  Box,
  Input,
  Container,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HourWorking from "./components/HourWorking";
import ListHourWorking from "./components/ListHourWorking";
import PriceHour from "./components/PriceHour";
import TotalHour from "./components/TotalHour";
import HourContext from "./context/HoursContext";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  console.log(colorMode);

  const [total, setTotal] = useState(0);
  const [precio, setPrecio] = useState(localStorage.getItem("precio") || 0);

  const totalFinal = total * precio;

  localStorage.setItem("precio", precio);

  return (
    <>
      <HourContext.Provider value={total}>
        <Container
          maxWidth="100%"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection="column"
          gap={4}
          minHeight="100vh"
          bgColor={colorMode == "dark" ? "#222831" : "FCFDF2"}
          padding={4}
        >
          <Stack
            direction="row"
            width={{ base: "100%", md: "60%" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Text
              width="100%"
              fontSize="32px"
              textAlign="center"
              color={colorMode == "dark" ? "#F7F7F7" : "#181818"}
            >
              Horas extras
            </Text>
            <IconButton
              icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            width={{ base: "100%", md: "100%" }}
            maxWidth="900px"
            bgColor={colorMode == "dark" ? "#30475E" :"#C7EEFF"  }
            justifyContent="center"
            padding={4}
            borderRadius="6px"
          >
            <ListHourWorking setTotal={setTotal} />
            <Stack
              justifyContent="space-between"
              width={{ base: "100%", md: "50%" }}
            >
              <PriceHour total={total} setPrecio={setPrecio} />
              <TotalHour totalFinal={totalFinal} />
            </Stack>
          </Stack>
        </Container>
      </HourContext.Provider>
    </>
  );
}

export default App;
