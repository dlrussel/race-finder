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
import RaceCard from "./RaceCard/RaceCard";
import { useState } from "react";
import fetchSearch from "../fetchSearch";
import { Distance } from "../APIResponsesTypes";

const DISTANCES: Distance[] = ["5K", "10K", "Half-Marathon", "Marathon"];

export default function RacesGrid() {
  const [requestParams, setRequestParams] = useState({
    distance: "" as Distance,
  });
  const [distanceVal, setDistanceVal] = useState("" as Distance);

  const results = useQuery(["search", requestParams], fetchSearch);

  if (results.isLoading) {
    return <Spinner />;
  }

  const races = results?.data?.races ?? [];

  return (
    <>
      <Card m={5} p={5} variant="outline" boxShadow="md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const obj = {
              distance: (formData.get("distance") as Distance) ?? "",
            };

            setRequestParams(obj);
          }}
        >
          <FormLabel htmlFor="distance">Distance</FormLabel>
          <Select
            name="distance"
            id="distance"
            mb={2}
            value={distanceVal}
            onChange={(e) => {
              setDistanceVal(e.target.value as Distance);
            }}
          >
            <option />
            {DISTANCES.map((distance) => (
              <option key={distance}>{distance}</option>
            ))}
          </Select>

          <Button type="submit" colorScheme="gray">
            Search
          </Button>
        </form>
      </Card>
      <Grid
        templateColumns={{ lg: "repeat(3, 1fr)", md: "repeat(2, 1fr)" }}
        gap={5}
        m={5}
      >
        {races.length ? (
          races.map((race) => (
            <GridItem key={race.id}>
              <RaceCard
                id={race.id}
                name={race.name}
                date={race.date}
                city={race.city}
                country={race.country}
                state={race.state}
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
