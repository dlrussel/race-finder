import {
  Grid,
  GridItem,
  Button,
  Select,
  FormLabel,
  Card,
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import fetchRace from "../fetchRace";
import RaceCard from "./RaceCard";

export default function RacesGrid() {
  const results = useQuery(["races"], fetchRace);

  if (results.isLoading) {
    return <Spinner />;
  }

  const races = results.data;

  return (
    <>
      <Card m={5} p={5} variant="outline" boxShadow="md">
        <form>
          <FormLabel htmlFor="distance">Distance</FormLabel>
          <Select name="distance" id="distance" mb={2}>
            <option></option>
            <option value="5k">5k</option>
            <option value="10k">10K</option>
            <option value="Half marathon">Half-Marathon</option>
            <option value="Marathon">Marathon</option>
          </Select>

          <Button type="submit" colorScheme="gray">
            Search
          </Button>
        </form>
      </Card>
      <Grid templateColumns={{ lg: "repeat(3, 1fr)" }} gap={5} m={5}>
        {races.length ? (
          races.map((race) => (
            <GridItem key={race.id}>
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
