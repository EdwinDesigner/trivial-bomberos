import {
    useStore
} from 'vuex'

const useAuthHelper = () => {

    const authStatusData = async(data) => {

        const store = useStore()

        store.dispatch('auth/updateStatus', {
            navigateName: data?data.navigateName:null,
            navigatePath: data?data.navigatePath:null,
            currentPath: data?data.currentPath:null,
        })

        return true
    }

    const gameSelected = async (data) => {
        const store = useStore()
        store.dispatch('auth/updateStatus', {
            gameMode: data?data.gameMode:null,
        })
        return true
    }

    const authStatus = async() => {
        const store = useStore()
        const resp = await store.getters['auth/getStatusUser'];
        return resp
    }

    return {
        authStatusData,
        gameSelected,
        authStatus
    }
}

export default useAuthHelper