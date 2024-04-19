import { Heading, Box } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RacesGrid from "./components/RacesGrid";
import heroImage from "./assets/hero.jpg";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgImage={`url(${heroImage})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="100%"
        minHeight={{ base: "xs", lg: "sm" }}
        filter="grayscale(85%)"
      >
        <Heading
          as="h1"
          fontSize={{ base: "3rem", lg: "6rem" }}
          textAlign="center"
          color="white"
          backgroundColor="black"
          opacity="85%"
          px={20}
          py={5}
        >
          Find a race
        </Heading>
      </Box>

      <RacesGrid />
    </QueryClientProvider>
  );
}

export default App;
