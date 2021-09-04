export function replaceWithIcon(taskListArray: any[]) {
    taskListArray.map((task: any) => {
        task.content.message = task.content.message
        .replaceAll('@a', '👤')
        .replaceAll('@m', '👨')
        .replaceAll('@f', '👩')

        return task
    })
}