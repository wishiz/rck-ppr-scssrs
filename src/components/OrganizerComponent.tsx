import Typography from "@mui/material/Typography";
import { Match } from "../types";

type Props = {
  matches: Array<Match>;
};

const OrganizerComponent = ({ matches }: Props) => (
  <Typography sx={{ fontSize: 20 }}>
    The number of matches played: {matches.length}
  </Typography>
);

export default OrganizerComponent;
