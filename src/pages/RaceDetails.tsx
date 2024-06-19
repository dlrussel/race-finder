import { Spinner, Text } from "@chakra-ui/react";
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
      <h2>{race.name}</h2>
      <Text>{`${race.city}, ${race.state}, ${race.country}`}</Text>
      <a href={race.registration_link} target="_blank">
        Register now
      </a>
    </>
  );
}
