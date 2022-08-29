import Typography from "@mui/material/Typography";
import { Match } from "../types";

type Props = {
  matches: Array<Match>;
};

const OrganizerComponent = ({ matches }: Props) => {
  return (
    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
      The number of matches played: {matches.length}
    </Typography>
  );
};

export default OrganizerComponent;
