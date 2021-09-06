export enum Gender {
    MALE = "male",
    FEMALE = "female"
}

export type CurrentGame = {
    players: Player[]
}

export type Player = {
    id: number,
    name: string,
    gender: Gender
}

export const initialPlayers: Player[] = [{
    id: 0,
    name: "",
    gender: Gender.MALE
},
{
    id: 1,
    name: "",
    gender: Gender.FEMALE
}]