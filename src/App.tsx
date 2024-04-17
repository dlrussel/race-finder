import {
  Input,
  Button,
  Select,
  FormControl,
  FormLabel,
  Card,
  Heading,
} from "@chakra-ui/react";

import RacesGrid from "./components/RacesGrid";

function App() {
  return (
    <>
      <Heading as="h1" size="4xl">
        Find your next race
      </Heading>

      <Card m={5} p={5} variant="outline" boxShadow="md">
        <FormControl>
          <FormLabel htmlFor="distance">Distance</FormLabel>
          <Select id="distance">
            <option value="5k">5k</option>
            <option value="10k">10K</option>
            <option value="half-marathon">Half-Marathon</option>
            <option value="marathon">Marathon</option>
          </Select>

          <FormLabel htmlFor="distance">Location</FormLabel>
          <Input placeholder="ex. Toronto" />
          <Button type="submit" colorScheme="gray">
            Search
          </Button>
        </FormControl>
      </Card>
      <RacesGrid />
    </>
  );
}

export default App;
