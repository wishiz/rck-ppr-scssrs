import { nanoid } from "nanoid";
import Typography from "@mui/material/Typography";
import { Match } from "../types";
import { getWinnersPercentages, capitalizeWord } from "../helpers";

type Props = {
  matches: Array<Match>;
};

const SpectatorComponent = ({ matches }: Props) => {
  const winsPercentages = getWinnersPercentages(matches);
  const winsPercentagesArr = Object.entries(winsPercentages);

  return (
    <div>
      {winsPercentagesArr.map(([winner, winsPerc]) => {
        const capitalizedWinner = capitalizeWord(winner);

        return (
          <Typography sx={{ fontSize: 20 }} key={nanoid()}>
            {capitalizedWinner} won {winsPerc}% of matches.
          </Typography>
        );
      })}
    </div>
  );
};

export default SpectatorComponent;
