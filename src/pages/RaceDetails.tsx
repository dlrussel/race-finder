import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchRaceDetails from "../fetchRaceDetails";
import formatDate from "../utilities/formatDate";

export default function RaceDetails() {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchRaceDetails);

  if (results.isLoading) {
    return <Spinner />;
  }

  const race = results?.data?.race;

  return (
    <Box px={4}>
      <Heading as="h2">{race.name}</Heading>
      <Text>Date: {formatDate(race.date)}</Text>
      <Text mb={3}>{`${race.city}, ${race.state}, ${race.country}`}</Text>
      <a className="button" href={race.registration_link} target="_blank">
        Register now
      </a>
    </Box>
  );
}
