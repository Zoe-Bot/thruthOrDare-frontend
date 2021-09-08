export enum Gender {
    MALE = "male",
    FEMALE = "female"
}

export type CurrentGame = {
    set: SetType | {},
    players: Player[]
}

export type SetType = {
    daresCount: number,
    truthCount: number,
    difference: number,
    dislikes: number,
    likes: number,
    description: string,
    status: string,
    taskList: TaskType[],
    _id: string,
    createdBy: string,
    language: Language,
    name: string,
    createdAt: string,
    updatedAt: string,
    __v: 7
}

export type TaskType = {
    status: TaskStatus,
    difference: number,
    dislikes: number,
    likes: number,
    _id: string,
    language: Language,
    type: TaskEnum,
    content: {
        "anyoneCount": number,
        "femaleCount": number,
        "maleCount": number,
        "currentPlayerGender": CurrentPlayerGender,
        "message": string
    },
    author: string,
    createdAt: string,
    updatedAt: string,
    __v: 0
}

export enum CurrentPlayerGender {
    MALE = "@cm",
    FEMALE = "@cf",
    ANYONE = "@ca"
}
export enum TaskEnum {
    TRUTH = "truth",
    DARE = "dare"
}
export enum TaskStatus {
    ACTIVE = "active",
    DELETED = "deleted",
    APPROVED = "approved",
    AWAITINGAPPROVAL = "awaitingapproval"
}
export enum Language {
    DE = "de",
    EN = "en"
}

export type Player = {
    id: number,
    name: string,
    gender: Gender,
    tasks?: any
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