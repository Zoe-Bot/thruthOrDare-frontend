import { TaskEnum } from "../model/game"

export function getNextPlayer(): {
    name: string,
    id: number
} {
    return {
        name: "Michael",
        id: 3
    }
}

export function hasTruthById(id: number): boolean {
    return true
}

export function hasDareById(id: number): boolean {
    return true
}

export function getTruthById(id: number): {
    id: string,
    message: string,
    type: TaskEnum
} {
    return {
        id: "mongoid",
        message: "Was glaubst du, mit welchen drei Wörtern würden dich deine Freunde beschreiben?",
        type: TaskEnum.TRUTH
    }
}

export function getDareById(id: number): {
    id: string,
    message: string,
    type: TaskEnum
} {
    return {
        id: "mongoid",
        message: "Star dieses Repo auf Github!",
        type: TaskEnum.DARE
    }
}