import { Text, Stack, Box, Input, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HourWorking from "./components/HourWorking";

function App() {
  const [monday, setMonday] = useState(0);
  const [tuesday, setTuesday] = useState(0);
  const [wednesday, setWednesday] = useState(0);
  const [thursday, setThursday] = useState(0);
  const [friday, setFriday] = useState(0);
  const [saturday, setSaturday] = useState(0);
  const [sunday, setSunday] = useState(0);

  let totalHours =
    tuesday + monday + wednesday + thursday + friday + saturday + sunday;

  const [priceHour, setPriceHour] = useState(0);

  let total = totalHours * priceHour;

  return (
    <>
      <Container
        maxWidth="100%"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
        minHeight="100vh"
        bgColor="#1B1C25"
        padding={4}
      >
        <Stack direction="column" width={{base: "100%", md: "50%"}}>
          <Text fontSize="32px" textAlign="center" color="#fff">
            workingHours
          </Text>

          <Box
            display="flex"
            flexDirection="column"
            padding={6}
            margin="10px"
            gap={4}
            bgColor="#152A38"
            borderRadius="6px"
          >
            <Box display="flex" justifyContent="space-between">
              <Text fontSize="24px" color="#11999E">
                Day
              </Text>
              <Text fontSize="24px" color="#11999E">
                Hour
              </Text>
            </Box>

            <Box display="flex" flexDirection="column" gap={4}>
              <HourWorking title="Monday" seter={setMonday} />
              <HourWorking title="Tuesday" seter={setTuesday} />
              <HourWorking title="wednesday" seter={setWednesday} />
              <HourWorking title="thursday" seter={setThursday} />
              <HourWorking title="friday" seter={setFriday} />
              <HourWorking title="saturday" seter={setSaturday} />
              <HourWorking title="sunday" seter={setSunday} />
            </Box>
          </Box>
        </Stack>
        <Stack width={{base: "100%", md: "50%"}} gap={4} >
          <Stack>
            <Box
              display="flex"
              flexDirection="column"
              padding={6}
              gap={4}
              bgColor="#152A38"
              borderRadius="6px"
            >
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="18px" textAlign="center" color="#11999E">
                  Total Hours
                </Text>
                <Text fontSize="18px" textAlign="center" color="#11999E">
                  Price hour
                </Text>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text fontSize="32px" color="#fff">
                  {totalHours}
                </Text>
                <Text fontSize="32px" color="#fff">
                  x
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
                  onChange={(evt) => {
                    if (evt.target.value.length == 0) {
                      console.log("Is zero");
                      setPriceHour(0);
                    } else {
                      let priceHourDay = parseInt(evt.target.value);
                      setPriceHour(priceHourDay);
                    }
                  }}
                />
              </Box>
            </Box>
          </Stack>
          <Stack >
            <Box
              display="flex"
              flexDirection="column"
              padding={6}
              gap={4}
              bgColor="#152A38"
              borderRadius="6px"
            >
              <Text fontSize="32px" textAlign="center" color="#11999E">
                Total
              </Text>
              <Text fontSize="36px" textAlign="center" color="#fff">
                {" "}
                ${total}
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default App;
