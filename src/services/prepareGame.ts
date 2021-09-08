import { CurrentPlayerGender, Gender, Player, SetType, TaskType } from "../model/game";

const maleCountSymbol = "@m"
const femaleCountSymbol = "@f"
const anyoneCountSymbol = "@a"

export function generatePossibleQuestions(players: Player[], set: SetType): [Player[] | null, TaskType[] | null, string[] | null] {
    const errors = validateData(players, set)
    const notPossibleTasks: TaskType[] = []

    if (errors.length)
        return [null, null, errors]

    let newPlayerState: Player[] = [...players]
    newPlayerState = newPlayerState.map((player: Player) => {
        player.tasks = [] // We have to init array
        return player
    })
    set.taskList.forEach((task: TaskType) => {
        try {
            const gameTask = {
                id: task._id,
                message: task.content.message
            }
            const cachePlayer = new CachePlayers([...players])
            let playerIdWhoGetsTask: number = -1


            if (task.content.currentPlayerGender === CurrentPlayerGender.MALE) {
                playerIdWhoGetsTask = cachePlayer.getRandomMale().id
            }
            if (task.content.currentPlayerGender === CurrentPlayerGender.FEMALE) {
                playerIdWhoGetsTask = cachePlayer.getRandomFemale().id
            }
            
            for(let i = 0; i < task.content.femaleCount; i++) {
                gameTask.message = gameTask.message.replace(femaleCountSymbol, cachePlayer.getRandomFemale().name)
            }

            for(let i = 0; i < task.content.maleCount; i++) {
                gameTask.message = gameTask.message.replace(maleCountSymbol, cachePlayer.getRandomMale().name)
            }

            for(let i = 0; i < task.content.anyoneCount; i++) {
                gameTask.message = gameTask.message.replace(anyoneCountSymbol, cachePlayer.getRandomAnyone().name)
            }

            if (task.content.currentPlayerGender === CurrentPlayerGender.ANYONE) {
                playerIdWhoGetsTask = cachePlayer.getRandomAnyone().id
            }            

            const playerWhoGetsTask = newPlayerState.find((player: Player) => player.id === playerIdWhoGetsTask)
            playerWhoGetsTask?.tasks.push(gameTask)

        } catch(error: any) {
            if(error.name === "NoMorePlayersException")
                notPossibleTasks.push(task)
            else
                console.error(error.name, error.message)
        }
    })
    
    return [newPlayerState, notPossibleTasks, null]
}


function validateData(players: Player[], set: SetType) {
    const errors = []

    if (!players)
        errors.push("Players are missing")

    if (players.length < 2)
        errors.push("Not enough Players")

    if (!set || Object.keys(set).length === 0)
        errors.push("Set is missing")

    if (set.taskList?.length === 0)
        errors.push("Not enough Tasks")

    return errors
}

class CachePlayers {

    constructor(private players: Player[]) {}

    getRandomAnyone(): Player {
        if (this.players.length === 0)
            throw new NoMorePlayersException()

        const playerIndex = this.getRandomIndex(this.players)
        const [ player ] = this.players.splice(playerIndex, 1)
        return player
    }

    getRandomMale(): Player {
        return this.getRandomGender(Gender.MALE)
    }

    getRandomFemale(): Player {
        return this.getRandomGender(Gender.FEMALE)
    }

    private getRandomGender(gender: Gender) {
        const players = this.players.filter((player: Player) => player.gender === gender)
       
        if (players.length === 0)
            throw new NoMorePlayersException()

        const randomPlayer = players[this.getRandomIndex(players)]
        const playerIndex = this.players.findIndex((player: Player) => player.id === randomPlayer.id)
        const [ player ] = this.players.splice(playerIndex, 1)
        return player
    }

    getAll(): Player[] {
        return this.players
    }

    private getRandomIndex(array: Player[]): number {
        return Math.floor(Math.random() * array.length)
    }
}

class NoMorePlayersException {  
    constructor(public message = "No more players", public name = "NoMorePlayersException") {}
}
