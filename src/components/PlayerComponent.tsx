import Typography from "@mui/material/Typography";
import { Match } from "../types";
import { getLargestStreak } from "../helpers";

type Props = {
  matches: Array<Match>;
};

const PlayerComponent = ({ matches }: Props) => {
  const { winners, count } = getLargestStreak(matches);

  return (
    <div>
      {winners.map((winner) => (
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Largest streak: {count} wins by {winner}
        </Typography>
      ))}
    </div>
  );
};

export default PlayerComponent;
