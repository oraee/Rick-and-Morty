import { useQuery } from "@apollo/client";
import { GET_CHARACTERS_QUERY } from "./queries/characters";
import { Alert, AlertTitle, Box, CircularProgress, Grid } from "@mui/material";
import { CharacterCard } from "./components/CharacterCard";

const App = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS_QUERY, {});

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error!</AlertTitle>
        Something went wrong
      </Alert>
    );
  }

  if (!data) return null;

  const { characters } = data;
  if (!characters) return null;

  if (characters?.results?.length === 0) {
    return (
      <Alert severity="error">
        <AlertTitle>Not Found!</AlertTitle>
        Characters Not Found!
      </Alert>
    );
  }

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {characters?.results?.map((character) => (
        <CharacterCard character={character} key={character?.id} />
      ))}
    </Box>
  );
};

export default App;
