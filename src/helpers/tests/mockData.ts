import { Match } from '../../types'

export const matchesMock1: Array<Match> = [{
    "choice1": "paper",
    "choice2": "paper"
},
{
    "choice1": "paper",
    "choice2": "scissor"
},
{
    "choice1": "scissor",
    "choice2": "paper"
},
{
    "choice1": "paper",
    "choice2": "paper"
},
{
    "choice1": "rock",
    "choice2": "rock"
},
{
    "choice1": "scissor",
    "choice2": "scissor"
}];

export const matchesMock2: Array<Match> = [
    {
        "choice1": "scissor",
        "choice2": "paper"
    },
    {
        "choice1": "paper",
        "choice2": "scissor"
    },
    {
        "choice1": "scissor",
        "choice2": "paper"
    },
    {
        "choice1": "paper",
        "choice2": "paper"
    },
    {
        "choice1": "rock",
        "choice2": "scissor"
    },
    {
        "choice1": "scissor",
        "choice2": "scissor"
    }];

export const matchesMock3: Array<Match> = [
    {
        "choice1": "scissor",
        "choice2": "scissor"
    },
    {
        "choice1": "paper",
        "choice2": "paper"
    },
    {
        "choice1": "paper",
        "choice2": "paper"
    },
    {
        "choice1": "paper",
        "choice2": "paper"
    },
    {
        "choice1": "rock",
        "choice2": "rock"
    },
    {
        "choice1": "scissor",
        "choice2": "scissor"
    }];

export const matchesMock4: Array<Match> = [
    {
        "choice1": "scissor",
        "choice2": "paper"
    },
    {
        "choice1": "paper",
        "choice2": "scissor"
    },
    {
        "choice1": "scissor",
        "choice2": "paper"
    },
    {
        "choice1": "paper",
        "choice2": "paper"
    },
    {
        "choice1": "rock",
        "choice2": "scissor"
    },
    {
        "choice1": "rock",
        "choice2": "scissor"
    },
    {
        "choice1": "rock",
        "choice2": "scissor"
    },];

export const winnersHashMock1 = {
    'rock': 0,
    'paper': 0,
    'scissor': 2,
}

export const winnersHashMock2 = {
    'rock': 0,
    'paper': 0,
    'scissor': 0,
}