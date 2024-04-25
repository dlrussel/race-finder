import { QueryFunction } from "@tanstack/react-query";
import { Distance, RaceAPIResponse } from "./APIResponsesTypes";

const fetchSearch: QueryFunction<
  RaceAPIResponse,
  ["search", { distance: Distance }]
> = async ({ queryKey }) => {
  const { distance } = queryKey[1];

  const apiRes = await fetch(
    `http://localhost:3001/api/races/?distance=${distance}`
  );

  if (!apiRes.ok) {
    throw new Error(`race search not ok ${distance}`);
  }

  return apiRes.json();
};

export default fetchSearch;
