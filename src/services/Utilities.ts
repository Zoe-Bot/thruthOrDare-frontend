import { TaskEnum } from "../model/game"

export function replaceArrayWithIcon(taskListArray: any[]) {
    taskListArray.map((task: any) => {
        task.content.message = replaceStringWithIcon(task.content.message)

        return task
    })
}

export function replaceStringWithIcon(string: string): string {
    return string
    .replaceAll('@a', '👤')
    .replaceAll('@m', '👨')
    .replaceAll('@f', '👩')
}

export function replaceCurrentPlayerStringWithIcon(string: string): string {
    return string
    .replaceAll('@ca', '👤')
    .replaceAll('@cm', '👨')
    .replaceAll('@cf', '👩')
}

export function taskEnumToString(taskEnum: TaskEnum) {
    return taskEnum === TaskEnum.TRUTH ? "Wahrheit" : "Pflicht"
}