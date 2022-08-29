import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { Persona, Match } from "../types";
import OrganizerComponent from "../components/OrganizerComponent";
import JudgeComponent from "../components/JudgeComponent";
import SpectatorComponent from "../components/SpectatorComponent";
import PlayerComponent from "../components/PlayerComponent";

type Props = {
  persona: Persona;
  matches: Array<Match>;
};

const personaComponentMapping = {
  organizer: OrganizerComponent,
  judge: JudgeComponent,
  spectator: SpectatorComponent,
  player: PlayerComponent,
};

const PersonaComponent = ({ persona, matches }: Props) => {
  const Persona = personaComponentMapping[persona];

  return (
    <>
      <AppBar sx={{ p: 2 }}>
        <Typography sx={{ mx: "auto" }}>
          Your role: {persona.toUpperCase()}
        </Typography>
      </AppBar>
      <Persona matches={matches} />
    </>
  );
};

export default PersonaComponent;
