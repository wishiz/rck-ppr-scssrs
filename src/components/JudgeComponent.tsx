import { Match } from "../types";
import { getMatchesWinners, capitalizeWord } from "../helpers";
import { Typography } from "@mui/material";

type Props = {
  matches: Array<Match>;
};

const JudgeComponent = ({ matches }: Props) => {
  const winners = getMatchesWinners(matches);
  const winnersArr = Object.entries(winners);

  return (
    <div>
      {winnersArr.map(([winner, wins]) => {
        const capitalizedWinner = capitalizeWord(winner);

        return (
          <Typography sx={{ fontSize: 20 }}>
            {capitalizedWinner} won {wins} times.
          </Typography>
        );
      })}
    </div>
  );
};

export default JudgeComponent;
