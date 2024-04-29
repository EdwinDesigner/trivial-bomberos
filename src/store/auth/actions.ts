// export const myAction = async ({ commit }) => {

// }


export const updateStatus = async({ commit }: { commit: any }, data: any) => { // entry debe de ser un parámetro

    await commit('updateStatus', data)

    return true
}


export const destroyStatus = async({ commit }: { commit: any }) => { // entry debe de ser un parámetro

    // Commit de una mutation -> updateEntry
    await commit('destroyStatus')

    return true

}