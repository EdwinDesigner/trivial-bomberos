// export const myAction = ( state ) => {
// }

export const updateStatus = (state: any, 
    { navigateName, navigatePath, currentPath, gameMode }: 
    { navigateName: any, navigatePath: any, currentPath: any, gameMode: any }) => {

    if (navigateName) {
        state.navigateName = navigateName
    }

    if (navigatePath) {
        state.navigatePath = navigatePath
    }

    if (currentPath) {
        state.currentPath = currentPath
    }

    if (gameMode) {
        state.gameMode = gameMode
    }
}

export const destroyStatus = (state: any) => {

    state.navigateName = null
    state.navigatePath = null
    state.currentPath = null
    state.gameMode = null

}