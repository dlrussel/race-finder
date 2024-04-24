import { Spinner, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchRaceDetails from "../fetchRaceDetails";

export default function RaceDetails() {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchRaceDetails);

  if (results.isLoading) {
    return <Spinner />;
  }

  const race = results?.data?.race;

  return (
    <>
      <Heading as="h2">{race.name}</Heading>
      <Text>{`${race.city}, ${race.state}, ${race.country}`}</Text>
    </>
  );
}
