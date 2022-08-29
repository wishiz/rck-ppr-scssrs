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
      {count ? (
        winners.map((winner) => (
          <Typography sx={{ fontSize: 20 }}>
            Largest streak: {count} wins by {winner}
          </Typography>
        ))
      ) : (
        <Typography sx={{ fontSize: 20 }}>No winners found</Typography>
      )}
    </div>
  );
};

export default PlayerComponent;
