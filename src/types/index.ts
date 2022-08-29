import { PERSONAS } from '../constants'

export type Choice = 'paper' | 'rock' | 'scissor';

export type Match = {
    choice1: Choice;
    choice2: Choice;
}

export type GetMatchesReponse = {
    matches: Array<Match>
}
export type Persona = typeof PERSONAS[number]