export const islogin = (state = false, action) => {
    if (action.type == 'ISLOGIN') return !state
    else return state
}