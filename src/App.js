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
          bgColor={colorMode == "dark" ? "#16213E" : "#F9F9F9"}
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
              fontWeight={600}
              fontFamily={"Poppins"}
              textAlign="center"
              color={colorMode == "dark" ? "#FFF" : "#181818"}
            >
              WHOUR
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
            // bgColor={colorMode == "dark" ? "#152A38" : "#fafafa"}
            justifyContent="center"
            padding={4}
            borderRadius={"md"}

            border={colorMode == "dark" ? "1px solid #11999E" : "1px solid #000"}
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
