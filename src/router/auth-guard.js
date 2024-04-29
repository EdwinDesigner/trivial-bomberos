import useAuthHelper from "../composables/useAuthHelper";

const { authStatusData } = useAuthHelper();

const isAuthenticatedGuard = async(to, from, next) => {

    await authStatusData({
        navigateName: from.meta.title,
        navigatePath: from.name,
        currentPath: to.name,
    })
    
    next()
    
}

export default isAuthenticatedGuard