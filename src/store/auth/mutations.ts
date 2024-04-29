// export const myAction = ( state ) => {
// }

export const updateStatus = (state: any, 
    { navigateName, navigatePath, currentPath }: 
    { navigateName: any, navigatePath: any, currentPath: any }) => {

    if (navigateName) {
        state.navigateName = navigateName
    }

    if (navigatePath) {
        state.navigatePath = navigatePath
    }

    if (currentPath) {
        state.currentPath = currentPath
    }

}

export const destroyStatus = (state: any) => {

    state.navigateName = null
    state.navigatePath = null
    state.currentPath = null

}