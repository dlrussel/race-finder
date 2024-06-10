import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RaceDetails from "./components/RaceDetails";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";

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
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/race/:id" element={<RaceDetails />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
