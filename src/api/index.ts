import { GetMatchesReponse } from '../types'

const matchURL = "https://petrotranzdata.azurewebsites.net/api/matches/get";

export const getMatches = async (): Promise<GetMatchesReponse> => {
  const resPromise = await fetch(matchURL);
  const response = await resPromise.json();

  return response;
};
