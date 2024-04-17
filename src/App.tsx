import { useEffect, useState } from "react";
import {
  Input,
  Button,
  Select,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Card,
  Heading,
} from "@chakra-ui/react";

import RaceCard from "./components/RaceCard";

function App() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    async function getRaces() {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzp1STtZ6ZYrFH9XVItcMun8WNRntbmkQsdUS-Hw49IXbxPSTNIMpjiCU8QUZxBknnW/exec?path=Sheet1&name"
      );
      const result = await response.json();
      setRaces(result);
    }

    getRaces();
  }, []);

  return (
    <>
      <Heading as="h1" size="4xl">
        Find your next race
      </Heading>

      <Card m={5} p={5} variant="outline" boxShadow="md">
        <FormControl>
          <FormLabel htmlFor="distance">Distance</FormLabel>
          <Select id="distance">
            <option value="5k">5k</option>
            <option value="10k">10K</option>
            <option value="half-marathon">Half-Marathon</option>
            <option value="marathon">Marathon</option>
          </Select>

          <FormLabel htmlFor="distance">Location</FormLabel>
          <Input placeholder="ex. Toronto" />
          <Button type="submit" colorScheme="gray">
            Search
          </Button>
        </FormControl>
      </Card>

      <Grid templateColumns="repeat(3, 1fr)" gap={5} m={5}>
        {races ? (
          races.map((race) => (
            <GridItem>
              <RaceCard
                name={race.name}
                date={race.date}
                link={race.link}
                location={race.location}
                distance={race.distance}
              />
            </GridItem>
          ))
        ) : (
          <p>No races found.</p>
        )}
      </Grid>
    </>
  );
}

export default App;
