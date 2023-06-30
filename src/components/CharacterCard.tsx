import { CharactersQuery } from "../__generated__/graphql";
import { Avatar, Box, Card, Chip, Stack, Typography } from "@mui/material";

type Character = ArrayObject<
  Defined<Defined<CharactersQuery["characters"]>["results"]>
>;

type Props = {
  character: Character;
};

const CharacterCard = ({ character }: Props) => {
  return (
    <>
      <Card
        elevation={0}
        sx={{
          border: "1px solid #ddd",
          borderRadius: "16px",
          margin: "10px",
          width: "320px",
        }}
      >
        <Box
          sx={{
            p: 4,
          }}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <Avatar
              src={character?.image || ""}
              sx={{ width: 128, height: 128 }}
            >
              {character?.name}
            </Avatar>
            <Typography variant="h6">{character?.name}</Typography>
            <Typography variant="subtitle1">
              species : {character?.species}
            </Typography>
            <Chip label={character?.species} sx={{ background: "#FFD6A5" }} />
          </Stack>
        </Box>
      </Card>
    </>
  );
};

export { CharacterCard };
