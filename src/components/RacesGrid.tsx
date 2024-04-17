import { useEffect, useState } from "react";

import { Grid, GridItem } from "@chakra-ui/react";

import RaceCard from "./RaceCard";
export default function RacesGrid() {
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
  );
}
