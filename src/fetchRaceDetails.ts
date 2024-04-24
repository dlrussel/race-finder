const fetchRaceDetails = async ({
  queryKey,
}: {
  queryKey: (string | undefined)[];
}) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://localhost:3001/api/race/${id}`);

  if (!apiRes.ok) {
    throw new Error(`details for race ${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchRaceDetails;
