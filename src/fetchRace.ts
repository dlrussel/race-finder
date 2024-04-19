const fetchRace = async () => {
  const apiRes = await fetch(
    "https://script.google.com/macros/s/AKfycbzp1STtZ6ZYrFH9XVItcMun8WNRntbmkQsdUS-Hw49IXbxPSTNIMpjiCU8QUZxBknnW/exec?path=Sheet1"
  );

  //if it's an unsucessful request react query wants us to throw an error
  if (!apiRes.ok) {
    throw new Error(`fetch races not ok`);
  }

  return apiRes.json();
};

export default fetchRace;
