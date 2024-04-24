const fetchRace = async () => {
  const apiRes = await fetch("http://localhost:3001/api/races");

  //if it's an unsucessful request react query wants us to throw an error
  if (!apiRes.ok) {
    throw new Error(`fetch races not ok`);
  }

  return apiRes.json();
};

export default fetchRace;
